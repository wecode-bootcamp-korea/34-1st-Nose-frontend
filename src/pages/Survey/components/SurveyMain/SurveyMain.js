import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './SurveyMain.scss';

const Surveymain = () => {
  const navigate = useNavigate();
  const goToSurveyName = () => {
    navigate(`SurveyName`);
  };

  // const goToMonsterList = () => {
  //   navigate(`/monsters`);
  // };

  const buttonColorHandle = e => {
    e.target.style.color = 'white';
    e.target.style.backgroundColor = 'black';
  };
  const buttonDefaultHandle = e => {
    e.target.style.color = 'black';
    e.target.style.backgroundColor = 'transparent';
  };

  return (
    <div className="Survey">
      <div className="surveyMainContainer">
        <div className="surveyBackground">
          <div className="surveyMainTextContainer">
            <div className="surveyMainText">
              <div>퍼퓸텔러가 지금까지 찾아드린 취향,</div>
              <div> 1회!</div>
            </div>
            <div className="surveyPrefix">
              Perfume Teller
              <div className="surveySufix">
                <div>맘에 쏙 드는 향수 찾기, 어려우셧나요?</div>
                <div> 쉽고 간단한 취향 테스트로</div>
                <div> 실패없는 취향저격 향기들을 만나보세요</div>
              </div>
            </div>
            <button
              onMouseOver={e => buttonColorHandle(e)}
              onMouseLeave={e => buttonDefaultHandle(e)}
              onClick={goToSurveyName}
              className="startButton"
            >
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveymain;
