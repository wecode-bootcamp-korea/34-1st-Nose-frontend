import React from 'react';

import './Perfume.scss';

const Perfume = ({
  key,
  id,
  name,
  price,
  thumbnail_img,
  tags,
  goToDetailPage,
}) => {
  return (
    <div className="perfumeBox" onClick={goToDetailPage}>
      <img src={thumbnail_img} alt="perfume" />
      <h2>{name}</h2>
      <p>{tags}</p>
      <p>{price}</p>
      <button />
    </div>
  );
};

export default Perfume;
