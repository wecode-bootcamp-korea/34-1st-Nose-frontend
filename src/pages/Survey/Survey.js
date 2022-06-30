import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SurveyMain from './components/SurveyMain/SurveyMain';
import SurveyName from './components/SurveyName/SurveyName';
import FavoriteScent from './components/FavoriteScent/FavoriteScent';
import FavoriteWord from './components/FavoriteWord/FavoriteWord';
import DislikeScent from './components/DIslikeScent/DislikeScent';
import SurveyResult from './components/SurveyResult/SurveyResult';
import './Survey.scss';

const Survey = () => {
  return (
    <Routes>
      <Route path="/" element={<SurveyMain />} />
      <Route path="DislikeScent" element={<DislikeScent />} />
      <Route path="FavoriteScent" element={<FavoriteScent />} />
      <Route path="FavoriteWord" element={<FavoriteWord />} />
      <Route path="SurveyName" element={<SurveyName />} />
      <Route path="SurveyResult" element={<SurveyResult />} />
    </Routes>
  );
};
export default Survey;
