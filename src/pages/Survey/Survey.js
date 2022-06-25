import React from 'react';
import './Survey.scss';

const Survey = () => {
  return (
    <div className="Survey">
      <div className="surveyBackground">
        <div className="surveyMainTextContainer">
          <div className="surveyMainText">
            퍼퓸텔러가 지금까지 찾아드린 취향, 1회!
          </div>
          <div className="surveyPrefix">Perfume Teller</div>
          <div className="surveyMainText">
            맘에 쏙 드는 향수 찾기, 어려우셧나요? 쉽고 간단한 취향 테스트로
            실패없는 취향저격 향기들을 만나보세요
          </div>
          <button className="startButton">START</button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
