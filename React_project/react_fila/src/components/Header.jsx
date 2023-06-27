import React from 'react'
import{Routes, Route, Link} from 'react-router-dom';
import './components.css' 

export default function Header() {
  return (
    <div>

        <div className="head_wrap">
            <div className="blank"></div>
            <div className="logo">
                <Link to='/'>
                    <img src ={process.env.PUBLIC_URL + '/img/LOGO/logo02.png'} alt="img" />
                </Link>
            </div>
            <div className="cart">
                <Link to='/cart'>
                 <img src={process.env.PUBLIC_URL + '/img/cart.png'} alt="cart" />

                </Link>
            </div>
        </div>


    </div>
  )
}
