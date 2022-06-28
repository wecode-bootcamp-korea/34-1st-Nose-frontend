import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './FavoriteScent.scss';
import { useLocation } from 'react-router-dom';
const FavoriteScent = ({ props }) => {
  const location = useLocation();
  const decodeUri = decodeURI(location.search);
  console.log(decodeUri);
  console.log(location);
  const navigate = useNavigate();

  const goToFavoriteWord = () => {
    navigate('/Survey/FavoriteWord');
  };

  return (
    <div className="FavoriteScent">
      <div className="favoriteScentContainer">
        <div className="favoriteScentText">
          좋아하는 향기에 더 가까운 이미지를 골라주세요
        </div>
        <div className="imgContainer">
          <img
            src="/images/survey/survey_field.jpg"
            alt="survey_field"
            onClick={goToFavoriteWord}
            className="favoriteImage"
          />
          <div className="imgInfo">햇빛 반짝이는 들판의 싱그러움</div>
        </div>
        <div className="imgContainer">
          <img
            src="/images/survey/survey_forest.jpg"
            alt="survey_forest"
            onClick={goToFavoriteWord}
            className="favoriteImage"
          />
          <div className="imgInfo">나무, 흙, 숲이 주는 깊이감</div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteScent;
