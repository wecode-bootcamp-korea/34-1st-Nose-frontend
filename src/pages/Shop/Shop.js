import React, { useState, useEffect } from 'react';
import PerfumeList from './components/PerfumeList';
import { useParams, useNavigate } from 'react-router-dom';
import './Shop.scss';

const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);

  useEffect(() => {
    fetch(`./data/Itemlist.json`)
      .then(response => response.json())
      .then(result => setPerfumes(result));
  }, []);
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate('/detail');
  };

  return (
    <div className="Shop">
      <div className="categoryWrapper"></div>
      <div className="perfumeWrapper">
        <PerfumeList perfumes={perfumes} goToDetailPage={goToDetailPage} />
      </div>
    </div>
  );
};

export default Shop;
