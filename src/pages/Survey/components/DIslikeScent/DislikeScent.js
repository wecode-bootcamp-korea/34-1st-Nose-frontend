import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import surveyNavigateUrl from '../../surveyConfig';
import './DislikeScent.scss';

const DislikeScent = () => {
  const location = useLocation();
  const decodeUri = decodeURI(location.search);
  const navigate = useNavigate();

  const goToSurveyResult = scent => {
    navigate(`${surveyNavigateUrl.DislikeScent}${decodeUri}&${scent}`);
  };

  return (
    <div className="dislikeScent">
      <div className="dislikeContainer">
        <div className="dislikeTitle">싫어하는 느낌의 향기를 골라주세요</div>
        <div className="dislikeBox">
          {DISLIKESCENTDATA.map(scent => {
            return (
              <div className={scent.className} key={scent.id}>
                <img
                  src={scent.src}
                  alt={scent.alt}
                  onClick={() => goToSurveyResult(`${scent.name}`)}
                  className="dislikeImage"
                />
                <div className="imgSubtitle">{scent.subTitle}</div>
                <div className="imgTitle">{scent.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const DISLIKESCENTDATA = [
  {
    id: 1,
    name: 'Water',
    className: 'waterContainer',
    src: '/images/survey/survey_water.jpg',
    alt: 'survey_water',
    subTitle: '강, 바다, 수영장의',
    title: '물내음',
  },
  {
    id: 2,
    name: 'Fruit',
    className: 'fruitContainer',
    src: '/images/survey/survey_fruit.jpg',
    alt: 'survey_fruit',
    subTitle: '달달한',
    title: '과일 한 아름',
  },
  {
    id: 3,
    name: 'Cinnamon',
    className: 'cinnamonContainer',
    src: '/images/survey/survey_cinnamon.jpg',
    alt: 'survey_cinnamon',
    subTitle: '코끝을 톡 건드리는',
    title: '시나몬',
  },
  {
    id: 4,
    name: 'Vanilla',
    className: 'vanillaContainer',
    src: '/images/survey/survey_vanilla.jpg',
    alt: 'survey_vanilla',
    subTitle: '달짝지근한',
    title: '바닐라',
  },
];

export default DislikeScent;
