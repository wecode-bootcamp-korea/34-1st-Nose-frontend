import React, { useState, useEffect } from 'react';
import PerfumeList from './components/PerfumeList';
import { useParams, useNavigate } from 'react-router-dom';
import './Shop.scss';

const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);
  const [category, setCategory] = useState([]);
  const params = useParams();

  // KEEP: 백엔드와 통신 시, 필요
  // useEffect(() => {
  //   fetch('http://10.58.7.184:8000/products')
  //     .then(response => response.json())
  //     .then(result => {
  //       setPerfumes(result.perfume_list);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`./data/Itemlist.json`)
      .then(response => response.json())
      .then(result => {
        setPerfumes(result);
      });
  }, []);

  const navigate = useNavigate();

  const fetchData = name => {
    console.log(name);
    fetch(`http://10.58.7.184:8000/products?fragrance=${name}`)
      .then(response => response.json())
      .then(result => {
        setCategory(result);
      });
  };
  // KEEP: 백엔드와 통신 시, 필요
  // const fetchData = () => {
  //   fetch(`./data/Itemlist.json`)
  //     .then(response => response.json())
  //     .then(result => {
  //       setCategory(result);
  //     });
  // };

  fetch(`./data/Itemlist.json`)
    .then(response => response.json())
    .then(result => {
      setCategory(result);
    });

  const filterCategory = name => {
    const filter = category.filter(el => {
      return el.category === name;
    });

    setPerfumes(filter);
  };
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
                onClick={() => filterCategory(category.name)}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="perfumeWrapper">
        <PerfumeList perfumes={perfumes} goToDetailPage={goToDetailPage} />
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
