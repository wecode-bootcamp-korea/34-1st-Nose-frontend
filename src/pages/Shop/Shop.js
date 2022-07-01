import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PerfumeList from './components/PerfumeList';
import { API } from '../../config';
import './Shop.scss';

const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API.PRODUCTS)
      .then(response => response.json())
      .then(result => {
        setPerfumes(result.perfume_list);
      });
  }, []);

  const fetchData = name => {
    fetch(`${API.PRODUCTS}?fragrance=${name}`)
      .then(response => response.json())
      .then(result => {
        setCategory(result);
      });
  };

  const filterPerfume = perfumes.filter(perfume => {
    return perfume.category.includes(category);
  });

  const goToDetailPage = id => {
    navigate(`/Detail/${id}`);
  };

  return (
    <div className="shop">
      <div className="categoryWrapper">
        <ul className="categories">
          {SHOPCATEGORYLIST.map(category => {
            return (
              <li
                className="singleCategory"
                key={category.id}
                id={category.id}
                onClick={e => setCategory(e.target.innerHTML)}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bar" />

      <div className="perfumeWrapper">
        <PerfumeList perfumes={filterPerfume} goToDetailPage={goToDetailPage} />
      </div>
    </div>
  );
};

const SHOPCATEGORYLIST = [
  {
    id: '0',
    name: 'All',
    className: 'categoryAll',
  },
  {
    id: '1',
    name: '시트러스',
    className: 'categoryCitrus',
  },
  {
    id: '2',
    name: '플로럴',
    className: 'categoryFloral',
  },
  {
    id: '3',
    name: '우디',
    className: 'categoryWoody',
  },
  {
    id: '4',
    name: '머스크',
    className: 'categoryMusk',
  },
];

export default Shop;
