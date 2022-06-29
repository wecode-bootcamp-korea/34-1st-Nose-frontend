import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FavoriteWord.scss';

const FavoriteWord = () => {
  const location = useLocation();
  const decodeUri = decodeURI(location.search);
  const navigate = useNavigate();

  const goToDislikeScent = word => {
    navigate(`/Survey/DislikeScent/${decodeUri}&${word}`);
  };

  return (
    <div className="favoriteWord">
      <div className="favoriteWordContainer">
        <div className="favoriteWordTitle">
          좋아하는 분위기의 단어를 골라주세요
        </div>
        <div className="imgContainer">
          <button onClick={() => goToDislikeScent('Fresh')} className="text">
            상큼한
          </button>
          <button onClick={() => goToDislikeScent('Clean')} className="text">
            산뜻한
          </button>
          <button onClick={() => goToDislikeScent('Pure')} className="text">
            투명한
          </button>
          <button onClick={() => goToDislikeScent('Cute')} className="text">
            귀여운
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteWord;
