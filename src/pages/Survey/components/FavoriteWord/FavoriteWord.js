import React from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';
import { useNavigate, useLocation } from 'react-router-dom';
import './FavoriteWord.scss';

const FavoriteWord = () => {
  const location = useLocation();
  const decodeUri = decodeURI(location.search);
  const navigate = useNavigate();

  const goToDislikeScentFresh = () => {
    navigate(`/Survey/DislikeScent/${decodeUri}&Pure`);
  };
  const goToDislikeScentClean = () => {
    navigate(`/Survey/DislikeScent/${decodeUri}&Clean`);
  };

  const goToDislikeScentPure = () => {
    navigate(`/Survey/DislikeScent/${decodeUri}&Pure`);
  };

  const goToDislikeScentCute = () => {
    navigate(`/Survey/DislikeScent/${decodeUri}&Cute`);
  };

  // cute , fresh , clean , pure

  return (
    <div className="FavoriteWord">
      <div className="favoriteWordContainer">
        <div className="favoriteWordTitle">
          좋아하는 분위기의 단어를 골라주세요
        </div>
        <div className="imgContainer">
          <button onClick={goToDislikeScentFresh} className="text">
            상큼한
          </button>
          <button onClick={goToDislikeScentClean} className="text">
            산뜻한
          </button>
          <button onClick={goToDislikeScentPure} className="text">
            투명한
          </button>
          <button onClick={goToDislikeScentCute} className="text">
            귀여운
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteWord;
