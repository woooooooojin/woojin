import React from 'react'
import './style.css'


export default function Header() {
  return (
    <div>
        <div className='head_wrap'>
            <h1 className='head_tit'>title</h1>

            <ul className='gnb'>
                <li><a href="#!">로그인</a></li>
                <li><a href="#!">회원가입</a></li>
                <li><a href="#!">language</a></li>
            </ul>
        </div>


    </div>
  )
}
