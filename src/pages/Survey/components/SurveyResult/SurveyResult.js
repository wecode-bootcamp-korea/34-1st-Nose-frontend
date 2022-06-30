import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import surveyNavigateUrl from '../../surveyConfig';
import './SurveyResult.scss';

const SurveyResult = () => {
  const [perfumeList, setPerfumeList] = useState([]);

  const location = useLocation();

  const decodeUri = decodeURI(location.search);

  const navigate = useNavigate();

  const nameStart = decodeUri.indexOf(`=`);
  const nameEnd = decodeUri.indexOf('&');
  const name = decodeUri.slice(nameStart + 1, nameEnd);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const randomNumber = randomNumberInRange(0, perfumeList.length - 1);

  useEffect(() => {
    fetch('/data/perfume_list.json')
      .then(res => res.json())
      .then(res => setPerfumeList(res));
  }, []);

  const perfume = perfumeList[randomNumber];
  if (!perfume) return;

  const detailUrl = `/detail/${randomNumber}`;

  const goToSurveyMainPage = () => {
    navigate(`${surveyNavigateUrl.Survey}`);
  };

  const goToDetailPage = () => {
    navigate(detailUrl);
  };

  const perfumeTitle = perfume.name.slice(0, 7);
  const perfumePrefix = perfume.name.slice(8);

  return (
    <div className="surveyResult">
      <div className="resultContainer">
        <div className="userTaste">
          <div className="userTasteText">
            <div className="title">
              {name.length < 2 ? `회원` : name}님의 향기 취향은
            </div>
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
        <div className="recommendText">
          {name.length < 2 ? `회원` : name}님의 취향에 맞는, 향기 추천
        </div>
        <div className="recommendContainer">
          <div className="recommendImgBox">
            <img
              className="img"
              src={perfume.thumbnail_img}
              alt="thumbnail_img"
            />
            <div className="imgText">
              <div className="title">{perfumeTitle}</div>
              <div className="prefix">{perfumePrefix}</div>
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
    </div>
  );
};

export default SurveyResult;
