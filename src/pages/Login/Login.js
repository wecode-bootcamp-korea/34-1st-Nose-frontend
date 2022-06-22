import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <form className="loginForm">
        <div className="loginTitle">로그인</div>
        <div div className="idpwWrapper">
          <div className="idpwLogin">
            <div className="id_Wrapper">아이디</div>
            <div className="inputWrapper">
              <input
                className="id_Blank"
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <div className="pwLogin">
              <div className="pw_Wrapper">비밀번호</div>
              <input
                className="pw_Blank"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
          </div>
        </div>
        <div className="addButton">
          <div className="findButton">
            <a href="#" className="findName">
              계정을 잊으셨나요?/비밀번호를 잊으셨나요?
            </a>
            <a href="#" className="makeAccount">
              회원가입하기
            </a>
          </div>
          <div className="btnLogin">로그인</div>
          <p className="checkAgree">
            <p className="info_One">이용약관</p>,
            <p className="info_Two">개인정보 수집 및 이용</p>,
            <p className="info_Three">개인정보 제공 내용</p>
            <p className="info-Four">을 확인하였고 동의합니다.</p>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
