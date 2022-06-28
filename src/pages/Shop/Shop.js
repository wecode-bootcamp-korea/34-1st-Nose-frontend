import React, { useState, useEffect } from 'react';
import PerfumeList from './components/PerfumeList';
import { useParams, useNavigate } from 'react-router-dom';
import './Shop.scss';

const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);

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

  const goToDetailPage = () => {
    navigate('/detail');
  };

  return (
    <div className="shop">
      <div className="categoryWrapper">
        <ul>
          <li>{shopDivList.map()}</li>
        </ul>
      </div>

      <div className="perfumeWrapper">
        <PerfumeList perfumes={perfumes} goToDetailPage={goToDetailPage} />
      </div>
    </div>
  );
};

export default Shop;

const shopDivList = [
  {
    id: '0',
    name: 'All',
  },
  {
    id: '1',
    name: '시트러스',
  },
  {
    id: '2',
    name: '플로럴',
  },
  {
    id: '3',
    name: '우디',
  },
  {
    id: '4',
    name: '머스크',
  },
];
