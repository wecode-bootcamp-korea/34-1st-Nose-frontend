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
  const changeNavColor = isScrollMoved ? '' : ' changeNav';
  const changeLinkColor = isScrollMoved ? '' : ' changeLinktagText';
  const changeIconColor = isScrollMoved ? '' : ' changeImg';

  return (
    <nav className={`nav${changeNavColor}`}>
      <div className="navCategory">
        <Link to="/Survey" className={`categoryText${changeLinkColor}`}>
          Perfume Teller
        </Link>
        <div className="shop">
          <div
            className={`categoryText${changeLinkColor}`}
            onMouseOver={openModal}
          >
            SHOP
          </div>
          <Modal modalOpen={modalOpen} closeModal={closeModal} />
        </div>
        <div className={`categoryText${changeLinkColor}`}>ABOUT</div>
        <div className={`categoryText${changeLinkColor}`}>EVENT</div>
      </div>
      <div className="paffem">
        <Link to="/" className={`linkText${changeLinkColor}`}>
          NOSÈ
        </Link>
      </div>
      <div className="navUserIcon">
        {NAVICONDATA.map((img, id) => {
          return (
            <Link to={img.link} key={img.id}>
              <img
                className={`navIcon${changeIconColor}`}
                alt={img.alt}
                src={img.src}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

const NAVICONDATA = [
  {
    id: 1,
    alt: 'user-icon',
    src: '/images/nav/nav-user.png',
    link: '/Login',
  },
  {
    id: 2,
    alt: 'logout-icon',
    src: '/images/nav/nav-logout.png',
    link: '',
  },
  {
    id: 3,
    alt: 'cart-icon',
    src: '/images/nav/nav-cart.png',
    link: '/Cart',
  },
];
export default Nav;
