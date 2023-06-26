import React from 'react'
import{Routes, Route, Link, useNavigate,} from 'react-router-dom'; 
import './components.css'
import { useSelector } from 'react-redux';


export default function Header() {

  const navigate = useNavigate()
  const list = useSelector((state)=>state.cart)

  


  return (
    <div>
        <div className='head_wrap'>

          <div className="blank">
            <button onClick={()=>{navigate(-1)}}>BACK</button>
          </div>

          <div className="head_logo">
            <Link to='/'>
              <img src={process.env.PUBLIC_URL + '/img/logo_baskinrobbins.png'} alt="logo" />
            </Link>
            
          </div>

          
          <div className="cart_site">
            <Link to='cart'>
            <img src={process.env.PUBLIC_URL + '/img/cart.png'} alt="cart" />
            <span className='cart_cnt'>{list.length}</span>
            </Link>
          </div>

           
        </div>


    </div>
  )
}
