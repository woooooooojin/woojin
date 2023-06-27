import React from 'react'
import{Routes, Route, Link, NavLink} from 'react-router-dom';
import './components.css' 

export default function Nav() {

    const activeColor= {
        color:'#fff',
        backgroundColor:'#002053',
        fontWeight:'bold'
    }

  return (
    <div>
            <nav>
                <ul className='nav_wrap'>
                    <li><NavLink to='/' style={({isActive})=>(isActive ? activeColor : {})}>Home</NavLink></li>
                    <li><NavLink to='/shirts' style={({isActive})=>(isActive ? activeColor : {})}>Shirts</NavLink></li>
                    <li><NavLink to='/pants' style={({isActive})=>(isActive ? activeColor : {})}>Pants</NavLink></li>
                    <li><NavLink to='/shoes' style={({isActive})=>(isActive ? activeColor : {})}>Shoes</NavLink></li>
                    <li><NavLink to='/tennis' style={({isActive})=>(isActive ? activeColor : {})}>Tennis</NavLink></li>
                </ul>
            </nav>

            

       
    </div>
  )
}
