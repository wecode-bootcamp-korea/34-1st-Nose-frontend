import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userInfo, setUserInfo] = useState({ userId: '', userPw: '' });
  const navigate = useNavigate();

  const handleUserInfo = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const loginFunction = event => {
    event.preventDefault();
    if (userInfo.userId.length === 0 || userInfo.userPw.length === 0) {
      alert('아이디 또는 비밀번호를 입력해주세요');
    } else {
      fetch('http://10.58.4.98:8000/users/signin', {
        method: 'POST',
        body: JSON.stringify({
          account: userInfo.userId,
          password: userInfo.userPw,
        }),
      })
        .then(response => response.json())
        .then(result => {
          localStorage.setItem('access_token', result.access_token);
          navigate('/Login');
        });
    }
  };

  return (
    <div className="logIn">
      <form className="loginForm">
        <div className="loginTitle">로그인</div>
        <div div className="idPwWrapper">
          <div className="idPwLogin">
            <div className="idWrapper">아이디</div>
            <div className="inputWrapper">
              <input
                onChange={handleUserInfo}
                className="idBlank"
                type="text"
                placeholder="아이디를 입력해주세요"
                name="userId"
              />
            </div>
            <div className="pwLogin">
              <div className="pwWrapper">비밀번호</div>
              <input
                onChange={handleUserInfo}
                className="pwBlank"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                name="userPw"
              />
            </div>
          </div>
        </div>
        <div className="addButton">
          <div className="findButton">
            <div className="lostAccount">
              계정을 잊으셨나요?
              <span> / </span>
              <div className="lostPassword">비밀번호를 잊으셨나요?</div>
            </div>
            <Link to="/signup">회원 가입하기</Link>
          </div>
          <button type="submit" className="btnLogin" onClick={loginFunction}>
            로그인
          </button>
          <div className="checkAgree">
            <p className="infoUse">이용약관</p>,
            <p className="infoPersonal">개인정보 수집 및 이용</p>,
            <p className="infoProvide">개인정보 제공 내용</p>
            <p className="infoCheck">을 확인하였고 동의합니다.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
