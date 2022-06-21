import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="sections" />
      <div className="sections" />
      <div className="informationContainer">
        <div className="imgBox">
          <img src="images/footer/instagram.png" alt="instagramLogo" />
          <img src="images/footer/facebook.png" alt="facebookLogo" />
          <img src="images/footer/brunch.png" alt="brunchLogo" />
        </div>
        <div className="mention">
          <strong>Find Your Signature, PAFFEM</strong>
        </div>
        <div className="information">
          <div className="text">
            주소:서울 중구 청계천로 100 시그니처타워 서관
            1103호|사업자등록번호:792-87-00153 <strong>사업자정보확인</strong>
            |상호:파펨|대표:최영열
          </div>
          <div className="text">
            고객 문의 이메일 : help@paffem.com| 고객 센터 :
            070-4948-8028|통신판매업신고번호: 제2020-서울중구-2566호|
            <strong>개인정보취급방침</strong>및<strong>이용약관</strong>
            |개인정보관리책임자:최영열
          </div>
          <div className="text">
            Create by <strong>BIGNO STUDIO</strong>. @ PAFFEM ALL right
            reserved.
          </div>
        </div>
        <div className="footerPaffem">PAFFEM</div>
      </div>
    </div>
  );
};

export default Footer;
