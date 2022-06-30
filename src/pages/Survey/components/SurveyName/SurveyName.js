import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import surveyNavigateUrl from '../../surveyConfig';
import './SurveyName.scss';

const SurveyName = () => {
  const [userName, setUserName] = useState('');

  const inputUserName = e => {
    setUserName(e.target.value);
  };

  const navigate = useNavigate();

  const updateUserName = () => {
    const queryString = `?name=${userName}`;
    navigate(`${surveyNavigateUrl.SurveyName}${queryString}`);
  };

  const goToPreview = () => {
    navigate(surveyNavigateUrl.Survey);
  };

  return (
    <div className="surveyName">
      <form className="surveyNameTextContainer">
        <div className="surveyMainText">
          <div>퍼퓸텔러가</div> 회원님을 어떻게 부르면 좋을까요?
        </div>
        <input
          onChange={inputUserName}
          className="nameInput"
          placeholder="이름"
        />
        <div className="buttonContainer">
          <button type="button" onClick={goToPreview} className="prevButton">
            이전
          </button>
          <button
            type="submit"
            className="nextButton"
            onClick={() => updateUserName()}
          >
            다음
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyName;
