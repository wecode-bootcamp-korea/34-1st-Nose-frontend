import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FavoriteWord.scss';

const FavoriteWord = () => {
  const buttonColorHandle = e => {
    e.target.style.color = 'white';
    e.target.style.backgroundColor = 'black';
  };
  const buttonDefaultHandle = e => {
    e.target.style.color = 'black';
    e.target.style.backgroundColor = 'transparent';
  };

  const buttonGrayHandle = e => {
    e.target.style.backgroundColor = 'rgb(235,235,235)';
    e.target.style.color = 'black';
  };

  const navigate = useNavigate();
  const goToDislikeScent = () => {
    navigate('/Survey/DislikeScent');
  };

  return (
    <div className="FavoriteWord">
      <div className="favoriteWordContainer">
        <div className="favoriteWordTitle">
          좋아하는 분위기의 단어를 골라주세요
        </div>
        <div className="imgContainer">
          <button
            onClick={goToDislikeScent}
            onMouseOver={buttonColorHandle}
            onMouseLeave={buttonGrayHandle}
            className="text"
          >
            상큼한
          </button>
          <button
            onClick={goToDislikeScent}
            className="text"
            onMouseOver={buttonColorHandle}
            onMouseLeave={buttonGrayHandle}
          >
            산뜻한
          </button>
          <button
            onClick={goToDislikeScent}
            className="text"
            onMouseOver={buttonColorHandle}
            onMouseLeave={buttonGrayHandle}
          >
            투명한
          </button>
          <button
            onClick={goToDislikeScent}
            className="text"
            onMouseOver={buttonColorHandle}
            onMouseLeave={buttonGrayHandle}
          >
            귀여운
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoriteWord;
