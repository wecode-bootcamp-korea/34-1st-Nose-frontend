import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ modalOpen, closeModal }) => {
  return (
    <div className="modal">
      {modalOpen && (
        <div className="modalContent" onMouseLeave={closeModal}>
          <div className="modalTextContainer">
            <Link className="linkText" to="/shop">
              <div className="modalText">2.5ml / 나만의 디스커버리 셋트</div>
            </Link>
            <div className="modalText">40ml</div>
            <div className="modalText">Curation</div>
            <div className="modalText">GOODS</div>
          </div>
          <div className="imgBox">
            <img
              className="modalImg"
              alt="aaa"
              src="/images/nav/modal-perffume.jpg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
