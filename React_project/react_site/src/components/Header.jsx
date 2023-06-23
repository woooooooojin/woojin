import React from 'react'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 
import './components.css'


export default function Header() {
  return (
    <div>
        <div className='head_wrap'>

          <div className="blank">  </div>

          <div className="head_logo">
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + '/img/logo_baskinrobbins.png'} alt="logo" />
            </Link>
            
          </div>

          
          <div className="cart_site">
            <Link to='cart'>
            <img src={process.env.PUBLIC_URL + '/img/icon_cart.png'} alt="cart" />
            </Link>
          </div>

           
        </div>


    </div>
  )
}
