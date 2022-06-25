import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './components/Modal';
import './Nav.scss';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    });
  });

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const isScrollMoved = scrollPosition < 5;

  const scrollNavHandle = () => {
    return isScrollMoved ? '' : ' changeNav';
  };

  const scrollLinktagHandle = () => {
    return isScrollMoved ? '' : ' changeLinktagText';
  };

  const scrollimgHandle = () => {
    return isScrollMoved ? '' : ' changeImg';
  };

  return (
    <nav className={`nav${scrollNavHandle()}`}>
      <div className="navCategory">
        <div className="navText">
          <Link to="/Survey" className={`linkText${scrollLinktagHandle()}`}>
            Perfume Teller
          </Link>
        </div>
        <div className="navText shop">
          <div className={scrollLinktagHandle()} onMouseOver={openModal}>
            SHOP
          </div>
          <Modal modalOpen={modalOpen} closeModal={closeModal} />
        </div>
        <div className="navText">
          <div className={scrollLinktagHandle()}>ABOUT</div>
        </div>
        <div className="navText">
          <div className={scrollLinktagHandle()}>EVENT</div>
        </div>
      </div>
      <div className="paffem">
        <Link to="/" className={`linkText${scrollLinktagHandle()}`}>
          PAFFEM
        </Link>
      </div>
      <div className="navUserIcon">
        <Link to="/Login">
          <img
            className={`navIcon${scrollimgHandle()}`}
            alt="user-icon"
            src="/images/nav/nav-user.png"
          />
        </Link>
        <img
          className={`navIcon${scrollimgHandle()}`}
          alt="logout-icon"
          src="/images/nav/nav-logout.png"
        />
        <Link to="/Cart">
          <img
            className={`navIcon${scrollimgHandle()}`}
            alt="cart-icon"
            src="/images/nav/nav-cart.png"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
