import React from 'react'
import './style.css'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 


export default function Header() {
  return (
    <div>
        <div className='head_wrap'>

          <div className="head_logo">
            <Link to='/'>베스킨라빈스</Link>
            
          </div>

           
        </div>


    </div>
  )
}
