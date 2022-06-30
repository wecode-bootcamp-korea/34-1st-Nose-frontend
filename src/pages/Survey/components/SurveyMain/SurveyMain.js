import React from 'react';
import { useNavigate } from 'react-router-dom';
import surveyNavigateUrl from '../../surveyConfig';
import './SurveyMain.scss';

const Surveymain = () => {
  const navigate = useNavigate();
  const goToSurveyName = () => {
    navigate(surveyNavigateUrl.SurveyMain);
  };

  return (
    <div className="survey">
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
            <button onClick={goToSurveyName} className="startButton">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surveymain;
