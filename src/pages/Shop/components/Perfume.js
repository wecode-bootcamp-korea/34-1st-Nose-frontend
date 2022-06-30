import React from 'react';
import './Perfume.scss';

const Perfume = ({ id, name, price, thumbnail_img, tags, goToDetailPage }) => {
  return (
    <div className="perfumeBox" key={id} onClick={() => goToDetailPage(id)}>
      <div className="perfumePicture">
        <img className="perfumeImg" src={thumbnail_img} alt="perfume" />
      </div>
      <div className="perfumeText">
        <div className="perfumeName">
          <h2>{name}</h2>
        </div>
        <div className="perfumeTags">
          <p>{tags}</p>
        </div>
        <div className="perfumePrice">
          <p>{price}</p>
        </div>
      </div>
      <div className="addButton">
        <button className="button">+</button>
      </div>
    </div>
  );
};

export default Perfume;
