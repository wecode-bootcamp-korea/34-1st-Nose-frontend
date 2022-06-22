import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="textContent">
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
      <div className="container">
        <div className="textContent">
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
      <div className="container">
        <div className="textContent">
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
      <div className="container">
        <div>
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
      <div className="container">
        <div className="textContent">
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
      <div className="lastContainer">
        <div>
          <div className="prefixTitle">1234</div>
          <div className="suffixTitle">5678</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
