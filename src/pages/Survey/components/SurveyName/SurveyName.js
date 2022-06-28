import React from 'react';
import { useState } from 'react';
import {
  useNavigate,
  useParams,
  Link,
  Location,
  useLocation,
} from 'react-router-dom';
import './SurveyName.scss';

const SurveyName = () => {
  const [userName, setUserName] = useState('');
  const params = useParams();
  const inputUserName = e => {
    setUserName(e.target.value);
  };
  params.userName = { userName };
  console.log(params.userName.userName);

  const navigate = useNavigate();
  const goToFavoriteScent = () => {
    navigate(`/Survey/FavoriteScent/${params.userName.userName}`);
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
          <button className="nextButton" onClick={goToFavoriteScent}>
            다음
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default SurveyName;
