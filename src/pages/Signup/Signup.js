import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.scss';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    account: '',
    email: '',
    phone_number: '',
    password: '',
  });

  const navigate = useNavigate();

  const { name, account, email, phone_number, password } = userInfo;

  const saveUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const accountRegExp = /^[a-z0-9+_.]{4,}/;
  const emailRegExp = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  const phoneNumberRegExp = /[0-9]{10,11}/;
  const passwordRegExp = /^[a-z0-9_-]{8,}$/;

  const isAccountValid = accountRegExp.test(account);
  const isEmailValid = emailRegExp.test(email);
  const isPhoneNumberValid = phoneNumberRegExp.test(phone_number);
  const isPasswordValid = passwordRegExp.test(password);

  const redWarningAccount =
    account.length === 0 || isAccountValid
      ? 'redMessageInactive'
      : 'redMessageActive';

  const redWarningEmail =
    email.length === 0 || isEmailValid
      ? 'redMessageInactive'
      : 'redMessageActive';

  const redWarningPhoneNumber =
    phone_number.length === 0 || isPhoneNumberValid
      ? 'redMessageInactive'
      : 'redMessageActive';

  const redWarningPassword =
    password.length === 0 || isPasswordValid
      ? 'redMessageInactive'
      : 'redMessageActive';

  const postUserData = () => {
    fetch('http://10.58.3.43:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        account: account,
        email: email,
        phone_number: phone_number,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/login');
        }
      });
  };

  const isAllTrue =
    isAccountValid && isEmailValid && isPhoneNumberValid && isPasswordValid;

  return (
    <div className="signup">
      <form className="form">
        <div className="title">회원가입</div>
        <div className="nameWrapper wrapper">
          <div className="name text">이름</div>
          <input
            className="name"
            type="text"
            placeholder="이름을 입력해주세요"
            name="name"
          />
          <div className="message" />
        </div>

        <div className="accountWrapper wrapper">
          <div className="account text">아이디</div>
          <input
            className="account"
            type="text"
            placeholder="아이디를 입력해주세요"
            name="account"
            onChange={saveUserInfo}
          />
          <div className="message">
            <span className={redWarningAccount}>
              {isAccountValid
                ? ''
                : '영문소문자 또는 숫자 4~16자로 입력해 주세요.'}
            </span>
          </div>
        </div>
        <div className="emailWrapper wrapper">
          <div className="email text">이메일</div>
          <input
            className="email"
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={saveUserInfo}
          />
          <div className="message">
            <span className={redWarningEmail}>
              {isEmailValid ? '' : '@와 .을 포함 시켜주세요.'}
            </span>
          </div>
        </div>
        <div className="phoneNumberWrapper wrapper">
          <div className="phoneNumber text">휴대전화 번호</div>
          <input
            className="phoneNumber"
            type="text"
            placeholder="휴대전화 번호를 입력해주세요"
            name="phone_number"
            onChange={saveUserInfo}
          />
          <div className="message">
            <span className={redWarningPhoneNumber}>
              {isPhoneNumberValid ? '' : "'-'를 제외한 숫자만 입력해주세요."}
            </span>
          </div>
        </div>
        <div className="passwordWrapper wrapper">
          <div className="password text">비밀번호</div>
          <input
            className="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={saveUserInfo}
          />
          <div className="message">
            <span className={redWarningPassword}>
              {isPasswordValid ? '' : '비밀번호는 4~16자리로 이뤄져야 합니다.'}
            </span>
          </div>
        </div>
        <div className="confirmPasswordWrapper wrapper">
          <div className="confirmPassword text">비밀번호 확인</div>
          <input
            className="confirmPassword"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <div className="message" />
        </div>

        {/* TODO: 백엔드에서 요청 하면 주석 풀고 쓰거나, 삭제할 예정 
        <label className="marketingAgree wrapper">
          <input type="checkbox" name="event_push" className="checkbox" />
          <span className="optionalMessage">
            이벤트 및 할인 소식 알림 동의 (선택)
          </span>
        </label> */}
        <div className="signupButton wrapper">
          <button
            type="button"
            className="button"
            onClick={postUserData}
            disabled={isAllTrue ? false : true}
          >
            동의하고 회원가입
          </button>
        </div>
        <div className="divider" />
      </form>
    </div>
  );
};

export default Signup;
