import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import surveyNavigateUrl from '../../surveyConfig';
import './FavoriteScent.scss';

const FavoriteScent = () => {
  const location = useLocation();

  const decodeUri = decodeURI(location.search);

  const navigate = useNavigate();

  const goToFavoriteWord = word => {
    return navigate(`${surveyNavigateUrl.FavoriteScent}${decodeUri}&${word}`);
  };

  return (
    <div className="favoriteScent">
      <div className="favoriteScentContainer">
        <div className="favoriteScentText">
          좋아하는 향기에 더 가까운 이미지를 골라주세요
        </div>
        {FAVORITESCENT_DATA.map(scent => {
          return (
            <div className="imgContainer" key={scent.id}>
              <img
                src={scent.src}
                alt={scent.alt}
                onClick={() => goToFavoriteWord(`${scent.name}`)}
                className="favoriteImage"
              />
              <div className="imgInfo">{scent.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FAVORITESCENT_DATA = [
  {
    id: 1,
    name: 'Field',
    src: '/images/survey/survey_field.jpg',
    alt: 'survey_field',
    title: '햇빛 반짝이는 들판의 싱그러움',
  },
  {
    id: 2,
    name: 'Forest',
    src: '/images/survey/survey_forest.jpg',
    alt: 'survey_forest',
    title: '나무, 흙, 숲이 주는 깊이감',
  },
];

export default FavoriteScent;
