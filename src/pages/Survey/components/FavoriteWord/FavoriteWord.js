import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import surveyNavigateUrl from '../../surveyConfig';
import './FavoriteWord.scss';

const FavoriteWord = () => {
  const location = useLocation();
  const decodeUri = decodeURI(location.search);
  const navigate = useNavigate();

  const goToDislikeScent = word => {
    navigate(`${surveyNavigateUrl.FavoriteWord}${decodeUri}&${word}`);
  };

  return (
    <div className="favoriteWord">
      <div className="favoriteWordContainer">
        <div className="favoriteWordTitle">
          좋아하는 분위기의 단어를 골라주세요
        </div>
        <div className="imgContainer">
          {FAVORITEWORD_DATA.map(word => {
            return (
              <button
                key={word.id}
                onClick={() => goToDislikeScent(`${word.name}`)}
                name={word.text}
                className="text"
              >
                {word.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const FAVORITEWORD_DATA = [
  {
    id: 1,
    name: 'Fresh',
    text: '상큼한',
  },
  {
    id: 2,
    name: 'Clean',
    text: '산뜻한',
  },
  {
    id: 3,
    name: 'Pure',
    text: '투명한',
  },
  {
    id: 4,
    name: 'Cute',
    text: '귀여운',
  },
];

export default FavoriteWord;
