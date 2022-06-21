import React, { useState } from 'react';
import './Signup.scss';

// import { useState, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    account: '',
    email: '',
    phone_number: '',
    password: '',
    event_push: '',
  });
  const [accountWarning, setAccountWarning] = useState('');
  // const [emailWarning, setEmailWarning] = useState('');
  // const [phoneNumberWarning, setPhoneNumberWarning] = useState('');
  // const [passwordWarning, setPasswordWarning] = useState('');

  const checkAccount = () =>
    !isAccountValid
      ? setAccountWarning(
          '아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.'
        )
      : setAccountWarning('');

  const checkEmail = () =>
    !isEmailValid
      ? setEmailWarning(
          '이미 사용중인 이메일입니다. 다른 이메일로 다시 시도해 주세요.'
        )
      : setEmailWarning('');

  const checkPhoneNumber = () =>
    !isPhoneNumberValid
      ? setPhoneNumber('휴대전화 번호를 입력해주세요.')
      : setPhoneNumber('');

  // destructuring
  const { name, account, email, phone_number, password, event_push } = userInfo;

  const saveUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const accountRegExp = /^[a-z0-9+_.]{4,}/;
  const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  const phoneNumberRegExp = /[0-9]{10,11}/;
  const passwordRegExp = /^[a-z0-9_-]{8,}$/;

  const isAccountValid = accountRegExp.test(account);
  const isEmailValid = emailRegExp.test(email);
  const isPhoneNumberValid = phoneNumberRegExp.test(phone_number);
  const isPasswordValid = passwordRegExp.test(password);

  const isAllValid =
    isAccountValid && isEmailValid && isPhoneNumberValid && isPasswordValid;

  const postUserData = () => {
    if (isAllValid) {
      // navigate('/main');
      alert('success!');
    } else if (!isAccountValid) {
      alert('아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.');
    } else if (!isEmailValid) {
      alert('이미 사용중인 이메일입니다. 다른 이메일로 다시 시도해 주세요.');
    } else if (!isPhoneNumberValid) {
      alert('휴대전화 번호를 입력해주세요.');
    } else if (!isPasswordValid) {
      alert('비밀번호는 4~16자리로 이뤄져야 합니다.');
    } else {
    }

    // 다 통과하지 못하는 경우 & 한 개만 통과하는 경우 & 두 개만 통과하는 경우

    fetch('API 주소', {
      method: 'POST',
      body: JSON.stringify({}),
    })
      .then(res => res.json())
      .then(result => result());
  };

  return (
    <div className="loginBox">
      <form className="form">
        <div className="title">회원가입</div>
        <div className="nameWrapper wrapper">
          <div className="name text">이름</div>
          <input type="text" placeholder="이름을 입력해주세요" name="name" />
          <div className="message" />
        </div>
        // 밑에꺼 내일 다시 시작
        <div className="accountWrapper wrapper">
          <div className="account text">아이디</div>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            name="account"
            onChange={saveUserInfo}
            onKeyUp={checkAccount}
          />
          <span className="warning">{accountWarning}</span>
          <div className="message" />
        </div>
        <div className="emailWrapper wrapper">
          <div className="email text">이메일</div>
          <input
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={saveUserInfo}
            onKeyUp={checkEmail}
          />
          <div className="message" />
        </div>
        <div className="phoneNumberWrapper wrapper">
          <div className="phoneNumber text">휴대전화 번호</div>
          <input
            type="text"
            placeholder="휴대전화 번호를 입력해주세요"
            name="phone_number"
          />
          <div className="message" />
        </div>
        <div className="passwordWrapper wrapper">
          <div className="password text">비밀번호</div>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
          />
          <div className="message" />
        </div>
        <div className="confirmPasswordWrapper wrapper">
          <div className="confirmPassword text">비밀번호 확인</div>
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            name="confirmPassword"
          />
          <div className="message" />
        </div>
        <label className="marketingAgree wrapper">
          <input type="checkbox" name="event_push" />
          이벤트 및 할인 소식 알림 동의 (선택)
        </label>
        <div className="signupButton wrapper">
          <button type="button" className="button">
            동의하고 회원가입
          </button>
        </div>
        <div className="divider" />
      </form>
    </div>
  );
};

export default Signup;
