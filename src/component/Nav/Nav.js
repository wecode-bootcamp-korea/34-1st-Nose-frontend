import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from './component/Modal';
import './Nav.scss';

const Nav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
        <ul className="navText shop">
          <div
            className={scrollPosition < 5 ? '' : 'changeAtagText'}
            onMouseOver={openModal}
          >
            SHOP
          </div>
          <Modal
            open={modalOpen}
            close={() => {
              closeModal();
            }}
          />
        </ul>
        <ul className="navText">
          <div className={scrollPosition < 5 ? '' : 'changeAtagText'}>
            ABOUT
          </div>
        </ul>
        <ul className="navText">
          <div className={scrollPosition < 5 ? '' : 'changeAtagText'}>
            EVENT
          </div>
        </ul>
      </div>
      <div className="paffem">
        <Link to="/" className={scrollPosition < 5 ? '' : 'changeAtagText'}>
          PAFFEM
        </Link>
      </div>
      <div className="navUserIcon">
        <Link to="/Login">
          <img
            className={scrollPosition < 5 ? '' : 'changeImg'}
            alt="user-icon"
            src="/images/nav/nav-user.png"
          />
        </Link>
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
