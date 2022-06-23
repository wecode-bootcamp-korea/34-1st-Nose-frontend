import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contentBox">
        <div className="sections">
          <div className="section">
            <div className="sectionText">고객센터</div>
          </div>
          <div className="section">
            <div>문의</div>
          </div>
          <div className="section">
            <div>혜택</div>
          </div>
          <div className="section">
            <div>파펨의 가치관</div>
          </div>
        </div>
        <div className="sections sectionsMargin">
          <div className="section">이메일|help@paffem.com</div>
          {INFODATA.map(text => {
            return (
              <div className="section" key={text.id}>
                <div className="sectionText">{text.textTop}</div>
                <div className="sectionText">{text.textMiddle}</div>
                <div className="sectionText">{text.textBottom}</div>
              </div>
            );
          })}
        </div>
        <div className="informationContainer">
          <div className="imgBox">
            <a href="https://www.instagram.com/wecode_bootcamp/?hl=ko">
              <img
                className="logo"
                src="/images/footer/instagram.png"
                alt="instagramLogo"
              />
            </a>
            <img
              className="logo"
              src="/images/footer/facebook.png"
              alt="facebookLogo"
            />
            <img
              className="logo"
              src="/images/footer/brunch.png"
              alt="brunchLogo"
            />
          </div>
          <div className="mention">
            <strong>Find Your Signature, PAFFEM</strong>
          </div>
          <div className="information">
            {FOOTERDATA.map(text => {
              return (
                <div className="text" key={text.id}>
                  {text.text}
                </div>
              );
            })}
          </div>
          <div className="footerPaffem">PAFFEM</div>
        </div>
      </div>
    </div>
  );
};

const INFODATA = [
  {
    id: 1,
    textTop: '공지사항',
    textMiddle: 'FAQ',
    textBottom: '1:1문의',
  },
  {
    id: 2,
    textTop: '친구 추천 포인트',
    textMiddle: '2.5ML 교환 서비스',
    textBottom: '',
  },
  {
    id: 3,
    textTop: 'Find Your Signature',
    textMiddle: 'Eco friendly',
    textBottom: 'Better but different',
  },
];
const FOOTERDATA = [
  {
    id: 1,
    text: '주식회사 파펨',
  },
  {
    id: 2,
    text: '주소:서울 중구 청계천로 100 시그니처타워 서관1103호|사업자등록번호:792-87-00153 사업자정보확인|상호:파펨|대표:최영열',
  },
  {
    id: 3,
    text: 'Create by BIGNO STUDIO. @ PAFFEM ALL right reserved.',
  },
];
export default Footer;
