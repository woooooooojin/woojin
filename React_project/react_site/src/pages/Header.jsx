import React from 'react'
import './style.css'


export default function Header() {
  return (
    <div>
        <div className='head_wrap'>

          <div className="head_logo">
            <img src={process.env.PUBLIC_URL + './images/best_01.png'} alt="img" />
          </div>

            <ul className='gnb'>
                <li><a href="#!">로그인</a></li>
                <li><a href="#!">회원가입</a></li>
                <li><a href="#!">language</a></li>
            </ul>
        </div>


    </div>
  )
}
