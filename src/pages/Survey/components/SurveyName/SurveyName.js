import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SurveyName.scss';

const SurveyName = () => {
  const [userName, setUserName] = useState('');
  const location = useLocation();

  const inputUserName = e => {
    setUserName(e.target.value);
  };

  const navigate = useNavigate();
  const goToFavoriteScent = () => {
    navigate(`/Survey/FavoriteScent/`);
  };

  const updateUserName = () => {
    const queryString = `?name=${userName}`;
    navigate(`/Survey/FavoriteScent/${queryString}`);
  };

  const goToPreview = () => {
    navigate('/Survey');
  };

  return (
    <div className="SurveyName">
      <div className="surveyNameTextContainer">
        <div className="surveyMainText">
          <div>퍼퓸텔러가</div> 회원님을 어떻게 부르면 좋을까요?
        </div>
        <input
          onChange={inputUserName}
          className="nameInput"
          placeholder="이름"
        />
        <div className="buttonContainer">
          <button onClick={goToPreview} className="prevButton">
            이전
          </button>
          {/* <button onClick={goToFavoriteScent} className="nextButton"> */}
          {/* <Link
            to={{ pathname: '/Survey/FavoriteScent', search: `?${userName}` }}
          > */}
          <button className="nextButton" onClick={() => updateUserName()}>
            다음
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SurveyName;
