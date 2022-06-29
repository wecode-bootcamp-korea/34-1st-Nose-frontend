import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DislikeScent.scss';

const DislikeScent = () => {
  const location = useLocation();
  const decodeUri = decodeURI(location.search);
  const navigate = useNavigate();

  const goToSurveyResult = scent => {
    navigate(`/Survey/SurveyResult/${decodeUri}&${scent}`);
  };

  return (
    <div className="dislikeScent">
      <div className="dislikeContainer">
        <div className="dislikeTitle">싫어하는 느낌의 향기를 골라주세요</div>
        <div className="dislikeBox">
          <div className="waterContainer">
            <img
              src="/images/survey/survey_water.jpg"
              alt="survey_water"
              name="Water"
              onClick={() => goToSurveyResult('Water')}
              className="dislikeImage"
            />
            <div className="imgSubtitle">강, 바다, 수영장의</div>
            <div className="imgTitle">물내음</div>
          </div>
          <div className="fruitContainer">
            <div>
              <img
                src="/images/survey/survey_fruit.jpg"
                alt="survey_fruit"
                name="Fruit"
                onClick={() => goToSurveyResult('Fruit')}
                className="dislikeImage"
              />
            </div>
            <div className="imgSubtitle">달달한</div>
            <div className="imgTitle">과일 한 아름</div>
          </div>
          <div className="sinamonContainer">
            <img
              src="/images/survey/survey_cinnamon.jpg"
              alt="survey_cinnamon"
              name="Cinnamon"
              onClick={() => goToSurveyResult('Cinnamon')}
              className="dislikeImage"
            />
            <div className="imgSubtitle">코끝을 톡 건드리는</div>
            <div className="imgTitle">시나몬</div>
          </div>
          <div className="vanilaContainer">
            <img
              src="/images/survey/survey_vanilla.jpg"
              alt="survey_vanilla"
              onClick={() => goToSurveyResult('Vanilla')}
              className="dislikeImage"
            />
            <div className="imgSubtitle">달짝지근한</div>
            <div className="imgTitle">바닐라</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DislikeScent;
