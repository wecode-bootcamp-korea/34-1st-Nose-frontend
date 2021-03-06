import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';
import MainCarousel from './components/MainCarousel';

const Main = () => {
  return (
    <div className="main">
      <MainCarousel />
      {CONTAINERDATA.map((data, idx) => {
        return (
          <div className={data.className} key={data.id}>
            <div className="textContent">
              <div className="prefixTitle">{data.prefixText}</div>
              <div className="suffixTitle">{data.suffixText}</div>
              <Link to={data.linkTo}>
                <button className="pageChangeButton">{data.buttonText}</button>
              </Link>
            </div>
          </div>
        );
      })}
      <video className="mainVideo" muted autoPlay loop>
        <source
          src="https://ak.picdn.net/shutterstock/videos/1054733276/preview/stock-footage-the-girl-walks-through-the-meadow-in-thick-high-grass-and-her-hand-touches-the-tops-of-the-ears-in.webm"
          type="video/mp4"
        />
      </video>
      <div className="brandInformation">
        <div className="textContent">
          <div className="prefixTitle">Find Your Signature</div>
          <div className="imageBox">
            {INFOBOXIMG.map(src => {
              return (
                <div className="infoBox" key={src.id}>
                  <img className="infoIcon" src={src.src} alt={src.alt} />
                  <div className="infoText">{src.alt}</div>
                </div>
              );
            })}
          </div>
          <button className="pageChangeButton">자세히보기</button>
        </div>
      </div>
      <div className="lastContainer">
        <div>
          <div className="suffixTitle">instagram @ NOŚE</div>
        </div>
      </div>
    </div>
  );
};

const INFOBOXIMG = [
  {
    id: 1,
    src: './images/main/info_algorithm.png',
    alt: 'algorithm',
  },
  {
    id: 2,
    src: './images/main/info_rabbit.png',
    alt: 'Cruelty free',
  },
  {
    id: 3,
    src: './images/main/info_perffume.png',
    alt: '2.5ml bottle',
  },
  {
    id: 4,
    src: './images/main/info_water.png',
    alt: 'German fragrance oil',
  },
  {
    id: 5,
    src: './images/main/info_recycle.png',
    alt: 'Eco package',
  },
  {
    id: 6,
    src: './images/main/info_smile.png',
    alt: 'Gender neutral',
  },
];
const CONTAINERDATA = [
  {
    id: 1,
    className: 'perfumeTeller',
    prefixText: 'Perfume Teller',
    suffixText: '재미있는 향기 취향 테스트로 나만의 #시그니처향수 찾기',
    linkTo: '/Survey',
    buttonText: '바로가기',
  },
  {
    id: 2,
    className: 'discoverySet',
    prefixText: 'Discovery Set',
    suffixText: '오늘, 나와 어울리는 향기를 위한 나만의 디스커버리 세트',
    linkTo: '/#',
    buttonText: '바로가기',
  },
];
export default Main;
