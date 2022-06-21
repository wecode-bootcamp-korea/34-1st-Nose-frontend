import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <nav className={`nav${scrollPosition < 5 ? '' : ' changeNav'}`}>
      <div className="navCategory">
        <ul className="navText">
          <Link
            to="/Survey"
            className={scrollPosition < 5 ? '' : 'changeAtagText'}
          >
            Perfume Teller
          </Link>
        </ul>
        <ul className="navText">
          <Link
            to="/Shop"
            className={scrollPosition < 5 ? '' : 'changeAtagText'}
          >
            SHOP
          </Link>
        </ul>
        <ul className="navText">
          <a href="#" className={scrollPosition < 5 ? '' : 'changeAtagText'}>
            ABOUT
          </a>
        </ul>
        <ul className="navText">
          <a href="#" className={scrollPosition < 5 ? '' : 'changeAtagText'}>
            EVENT
          </a>
        </ul>
      </div>
      <div className="paffem">
        <Link to="/" className={scrollPosition < 5 ? '' : 'changeAtagText'}>
          PAFFEM
        </Link>
      </div>
      <div className="navUserIcon">
        <img
          className={scrollPosition < 5 ? '' : 'changeImg'}
          alt="user-icon"
          src="/images/nav/nav-user.png"
        />
        <img
          className={scrollPosition < 5 ? '' : 'changeImg'}
          alt="logout-icon"
          src="/images/nav/nav-logout.png"
        />
        <Link to="/Cart">
          <img
            className={scrollPosition < 5 ? '' : 'changeImg'}
            alt="cart-icon"
            src="/images/nav/nav-cart.png"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
