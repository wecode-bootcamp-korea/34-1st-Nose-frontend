import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({ open, close }) => {
  return (
    <div>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <div className="modalContent" onMouseLeave={() => close()}>
            <div className="modalTextContainer">
              <Link to="/Shop">
                <div className="modalText">2.5ml / 나만의 디스커버리 셋트</div>
              </Link>
              <div className="modalText">40ml</div>
              <div className="modalText">Curation</div>
              <div className="modalText">GOODS</div>
            </div>
            <div className="imgBox">
              <img alt="aaa" src="/images/nav/modal-perffume.jpg" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
