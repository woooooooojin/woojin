import React from 'react'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 
import './components.css'


export default function Header() {
  return (
    <div>
        <div className='head_wrap'>

          <div className="head_logo">
            <Link to='/'>
              <img src="./img/logo_baskinrobbins.png" alt="logo" />
            </Link>
            
          </div>

           
        </div>


    </div>
  )
}
