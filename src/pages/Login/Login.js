import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  const loginFunction = () => {
    console.log(id, pw);

    fetch('http://10.58.4.98:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        account: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        localStorage.setItem('access_token', result.access_token);
      });
  };

  // id:uju
  //  1. 아이디 인풋 값 부여

  //   2. 인풋 아이디 입력된 값을 찾아준다  => 아이디 input에 event함수 사용 - 이벤트리스너
  //   2.1 인풋 태그안에 onChange 걸어준다
  //   3. 인풋 아이디 입략된 값을 찾았으면 스테이트에 저장한다

  // console.log('id:', id);
  // console.log('pw:', pw);
  return (
    <div className="login">
      <form className="loginForm">
        <div className="loginTitle">로그인</div>
        <div div className="idpwWrapper">
          <div className="idpwLogin">
            <div className="id_Wrapper">아이디</div>
            <div className="inputWrapper">
              <input
                onChange={event => {
                  setId(event.target.value);
                }}
                className="id_Blank"
                type="text"
                placeholder="아이디를 입력해주세요"
              />
            </div>
            <div className="pwLogin">
              <div className="pw_Wrapper">비밀번호</div>
              <input
                onChange={event => {
                  setPw(event.target.value);
                }}
                className="pw_Blank"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
          </div>
        </div>
        <div className="addButton">
          <div className="findButton">
            <div>
              <Link to="/">계정을 잊으셨나요?</Link>
              <span> </span>
              <Link to="/">비밀번호를 잊으셨나요?</Link>
            </div>
            <Link to="/signup">회원 가입하기</Link>
          </div>
          <button type="button" className="btnLogin" onClick={loginFunction}>
            로그인
          </button>
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
