import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './MainCarousel.scss';

const Maincarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const totalSlide = SLIDEDATA.length - 1;

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
        {SLIDEDATA.map(slide => {
          return (
            <div className="imgHandle" key={slide.id}>
              <div className={slide.className}>
                <div className="textContent">
                  <div className="prefixTitle">{slide.prefix}</div>
                  <div className="suffixTitle">{slide.suffix}</div>
                  <Link to={slide.linkTo}>
                    <button className="pageChangeButton">
                      {slide.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SLIDEDATA = [
  {
    id: 1,
    className: 'changeSignature',
    prefix: '제품 교환 서비스',
    suffix: 'Change For Signature',
    buttonText: '교환 서비스',
    linkTo: '/#',
  },
  {
    id: 2,
    className: 'choseYours',
    prefix: '6가지 향기 담아보기',
    suffix: '새로운 계절, 새로운 향기',
    buttonText: '나만의 향기 담기',
    linkTo: '/shop',
  },
];

export default Maincarousel;
