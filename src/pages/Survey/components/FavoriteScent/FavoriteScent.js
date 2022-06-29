import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FavoriteScent.scss';

const FavoriteScent = () => {
  const location = useLocation();

  const decodeUri = decodeURI(location.search);

  const navigate = useNavigate();

  const goToFavoriteWord = word => {
    return navigate(`/Survey/FavoriteWord/${decodeUri}&${word}`);
  };

  return (
    <div className="favoriteScent">
      <div className="favoriteScentContainer">
        <div className="favoriteScentText">
          좋아하는 향기에 더 가까운 이미지를 골라주세요
        </div>
        <div className="imgContainer">
          <img
            src="/images/survey/survey_field.jpg"
            alt="survey_field"
            onClick={() => goToFavoriteWord('Field')}
            className="favoriteImage"
          />
          <div className="imgInfo">햇빛 반짝이는 들판의 싱그러움</div>
        </div>
        <div className="imgContainer">
          <img
            src="/images/survey/survey_forest.jpg"
            alt="survey_forest"
            onClick={() => goToFavoriteWord('Forest')}
            className="favoriteImage"
          />
          <div className="imgInfo">나무, 흙, 숲이 주는 깊이감</div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteScent;
