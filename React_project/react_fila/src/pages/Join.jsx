import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Join() {
    const navigate = useNavigate()
    const goLoin = () => {
        navigate('/login');
      };
  return (
    <div>
        <div className="join_wrap">
        <div className="category_tit">
          <h2>회원가입</h2>
        </div>


        <input 
        type="text" 
        placeholder="아이디 입력"
        id="join_id"
        className="join_id"
       />

      <input 
        type="password" 
        placeholder="비밀번호 입력"
        id="join_pw"
        className="join_pw" 
        />

      <input 
        type="password" 
        placeholder="비밀번호 확인"
        id="check_pw"
        className="check_pw" 
        />


      <button
        type='button'
        className="joinButton"
        onClick={() => {
          let joinState = false;
        
          members.map((member) => {
            if (member.id === id && member.pw === pw) {
                joinState = true;
            }
          });
        
          if (joinState) {
            alert('로그인 성공');
            goLoin()
          } else {
            alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
          }
        }}>
        가입하기
      </button>
      </div>
    </div>
  )
}
