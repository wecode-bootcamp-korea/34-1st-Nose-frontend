import React, { useState, useEffect } from 'react';
import PerfumeList from './components/PerfumeList';
import { useParams, useNavigate } from 'react-router-dom';
import './Shop.scss';

const Shop = () => {
  const [perfumes, setPerfumes] = useState([]);
  const params = useParams();

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
    <div className="perfumes">
      <h1>shop page</h1>
      <PerfumeList perfumes={perfumes} goToDetailPage={goToDetailPage} />
    </div>
  );
};

export default Shop;
