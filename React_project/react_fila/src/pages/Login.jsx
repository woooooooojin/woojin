import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

export default function Login() {

  const members = [
    {
      id:'woojin',
      pw:'woojin123',
    },
    {
      id:'kevin',
      pw:'kevin123',
    },
    {
      id:'soojsin',
      pw:'soonsin123',
    },
  ]


  let [id, setId] = useState('')
  let [pw, setPw] = useState('')

  const goMain = () => {
    Link('/home');
  };

  let i 

  return (
    <div>

      <div className="category_tit">
        <h2>로그인</h2>
      </div>

      <div className="login_wrap">
        <input 
        type="text" 
        placeholder="아이디 입력"
        id="login_id"
        className="login_id"
        onChange={e => {
          setId(e.target.value);
        }} />

      <input 
        type="password" 
        placeholder="비밀번호 입력"
        id="login_pw"
        className="login_pw" 
        onChange={e => {
          setPw(e.target.value);
        }}/>


      <button
        type='button'
        className="loginButton"
        onClick={() => {
          let loginState = false;
        
          members.map((member) => {
            if (member.id === id && member.pw === pw) {
              loginState = true;
            }
          });
        
          if (loginState) {
            alert('로그인 성공');
          } else {
            alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
          }
        }}>
        로그인
      </button>
      </div>


    </div>
  )
}
