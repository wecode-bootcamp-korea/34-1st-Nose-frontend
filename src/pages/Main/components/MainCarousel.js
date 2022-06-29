import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './MainCarousel.scss';
const Maincarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const totalSlide = 1;

  const nextSlide = () => {
    if (imgIndex >= totalSlide) {
      setImgIndex(0);
    } else {
      setImgIndex(imgIndex + 1);
    }
  };

  const prevSlide = () => {
    if (imgIndex === 0) {
      setImgIndex(totalSlide);
    } else {
      setImgIndex(imgIndex - 1);
    }
  };

  return (
    <div className="mainCarousel">
      <div className="buttonContainer">
        <img
          className="nextButton"
          src="./images/main/leftbutton.png"
          alt="leftButton"
          onClick={prevSlide}
        />
        <img
          className="nextButton"
          src="./images/main/rightbutton.png"
          alt="rightbutton"
          onClick={nextSlide}
        />
      </div>
      <div
        className="carouselContainer"
        style={{ transform: `translateX(-${imgIndex}00vw) ` }}
      >
        <div className="imgHandle">
          <div className="changeSignature">
            <div className="textContent">
              <div className="prefixTitle">제품 교환 서비스</div>
              <div className="suffixTitle">Change For Signature</div>
              <Link to="/Shop">
                <button className="pageChangeButton">교환 서비스</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="imgHandle">
          <div className="choseYours">
            <div className="textContent">
              <div className="prefixTitle">6가지 향기 담아보기</div>
              <div className="suffixTitle">새로운 계절, 새로운 향기</div>
              <Link to="/Shop">
                <button className="pageChangeButton">나만의 향기 담기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincarousel;
