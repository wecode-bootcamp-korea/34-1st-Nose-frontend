import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SurveyResult.scss';

const SurveyResult = () => {
  const [perfumeList, setPerfumeList] = useState([]);

  const location = useLocation();

  const decodeUri = decodeURI(location.search);

  const navigate = useNavigate();

  const userName = () => {
    const nameStart = decodeUri.indexOf(`=`);
    const nameEnd = decodeUri.indexOf('&');
    const name = decodeUri.slice(nameStart + 1, nameEnd);
    let result;
    if (name.length < 2) {
      return (result = '회원');
    } else return (result = name);
    return result;
  };

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomNumber = randomNumberInRange(1, 16);

  useEffect(() => {
    fetch('http://localhost:3000/data/perfume_list.json')
      .then(res => res.json())
      .then(res => setPerfumeList(res));
  }, []);

  const perfume = perfumeList[randomNumber];

  const detailUrl = `/detail/${randomNumber}`;

  const goToSurveyMainPage = () => {
    navigate('/Survey');
  };

  const goToDetailPage = () => {
    navigate(detailUrl);
  };

  return (
    <div className="SurveyResult">
      {perfume ? (
        <div className="resultContainer">
          <div className="userTaste">
            <div className="userTasteText">
              <div className="title">{userName()}님의 향기 취향은</div>
              <div className="suffix">{perfume.tags}</div>
              <div className="prefix">
                좋아하는 느낌은 달달한,귀여운,성숙한 이네요.
              </div>
            </div>
            <img
              className="userTasteImg"
              src="/images/survey/survey_result.png"
              alt="survey_result"
            />
          </div>
          <div className="recommendText">00님의 취향에 맞는, 향기 추천</div>
          <div className="recommendContainer">
            <div className="recommendImgBox">
              <img
                className="img"
                src={perfume.thumbnail_img}
                alt="thumbnail_img"
              />
              <div className="imgText">
                <div className="title">{perfume.name.slice(0, 7)}</div>
                <div className="prefix">{perfume.name.slice(8)}</div>
                <div className="suffix">{perfume.tags}</div>
              </div>
            </div>
          </div>
          <div className="itemInfo">
            <div className="itemInfoTitle">
              취향에 맞는 향수를 가볍게 즐겨보세요
            </div>
            <Link to={detailUrl}>
              <img
                className="itemImg"
                src="/images/survey/survey_detail.png"
                alt="survey_detail"
              />
            </Link>
            <div className="itemInfoText">
              <div className="title">EAU DE PARFUM</div>
              <div className="prefix">2.5ml / 50회 이상의 분사량</div>
              <div className="suffix">12% 2.5ml 1병 = 4,000원</div>
            </div>
          </div>
          <div className="resultFooter">
            <div className="buttonContainer">
              <button className="goToSurveyButton" onClick={goToSurveyMainPage}>
                다시하기
              </button>
              <button className="goToDetailPage" onClick={goToDetailPage}>
                향수보러가기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SurveyResult;
