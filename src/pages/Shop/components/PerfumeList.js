import React from 'react';
import Perfume from './Perfume';

const PerfumeList = ({ perfumes, goToDetailPage }) => {
  return (
    <div className="PerfumeList">
      {perfumes.map(perfume => {
        return (
          <Perfume
            key={perfume.product_id}
            id={perfume.product_id}
            name={perfume.name}
            price={perfume.price}
            thumbnail_img={perfume.thumbnail_img}
            tags={perfume.tags}
            goToDetailPage={goToDetailPage}
          />
        );
      })}
    </div>
  );
};

export default PerfumeList;
