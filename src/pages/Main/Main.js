import React from 'react';
import { Link } from 'react-router-dom';
import './Main.scss';

const Main = () => {
  const changeBlack = e => {
    e.target.style.background = 'black';
  };
  const defaultColor = e => {
    e.target.style.background = 'transparent';
  };
  const changeAllBlack = e => {
    e.target.style.background = 'black';
    e.target.style.color = 'white';
  };
  const defalutAllColor = e => {
    e.target.style.background = 'transparent';
    e.target.style.color = 'black';
  };

  return (
    <div>
      <div className="container">
        <div className="changeSignature">
          <div className="textContent">
            <div className="prefixTitle">6가지 향기 담아보기</div>
            <div className="suffixTitle">새로운 계절, 새로운 향기</div>
            <Link to="/Shop">
              <button
                onMouseOver={e => changeBlack(e)}
                onMouseLeave={e => defaultColor(e)}
              >
                나만의 향기 담기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="perfumeTeller">
          <div className="textContent">
            <div className="prefixTitle">Perfume Teller</div>
            <div className="suffixTitle">
              재미있는 향기 취향 테스트로 나만의 #시그니처향수 찾기
            </div>
            <Link to="/Survey">
              <button
                onMouseOver={e => changeBlack(e)}
                onMouseLeave={e => defaultColor(e)}
              >
                바로가기
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="discoverySet">
          <div className="textContent">
            <div className="prefixTitle">Discovery Set</div>
            <div className="suffixTitle">
              오늘,나와 어울리는 향기를 위한 나만의 디스커버리 세트
            </div>

            <button
              onMouseOver={e => changeAllBlack(e)}
              onMouseLeave={e => defalutAllColor(e)}
            >
              바로가기
            </button>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div>
          <div className="prefixTitle">유저리뷰</div>
          <div className="suffixTitle">컨테이너</div>
        </div>
      </div> */}
      <div className="container">
        <div>
          <video oncontextmenu="return false;" id="myVideo" muted autoPlay loop>
            <source
              src="https://ak.picdn.net/shutterstock/videos/1054733276/preview/stock-footage-the-girl-walks-through-the-meadow-in-thick-high-grass-and-her-hand-touches-the-tops-of-the-ears-in.webm"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="container">
        <div className="brandInformation">
          <div className="textContent">
            <div className="prefixTitle">Find Your Signature</div>
            <div className="imageBox">
              <div className="infoBox">
                <img
                  src="./images/main/info_algorithm.png"
                  alt="algorithmIcon"
                />
                <div className="infoText">algorithm</div>
              </div>
              <div className="infoBox">
                <img src="./images/main/info_rabbit.png" alt="rabbitIcon" />
                <div className="infoText">Cruelty free</div>
              </div>
              <div className="infoBox">
                <img src="./images/main/info_perffume.png" alt="perffumeIcon" />
                <div className="infoText">2.5ml bottle</div>
              </div>
              <div className="infoBox">
                <img src="./images/main/info_water.png" alt="waterIcon" />
                <div className="infoText">German fragrance oil</div>
              </div>
              <div className="infoBox">
                <img src="./images/main/info_recycle.png" alt="recycleIcon" />
                <div className="infoText">Eco package</div>
              </div>
              <div className="infoBox">
                <img src="./images/main/info_smile.png" alt="smileIcon" />
                <div className="infoText">Gender neutral</div>
              </div>
            </div>
            <button
              onMouseOver={e => changeAllBlack(e)}
              onMouseLeave={e => defalutAllColor(e)}
            >
              자세히보기
            </button>
          </div>
        </div>
      </div>
      <div className="lastContainer">
        <div>
          <div className="suffixTitle">instagram @paffem</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
