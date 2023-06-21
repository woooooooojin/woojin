import React from 'react'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 
import './style.css'


export default function Home() {
  return (
    <div>
        <div className="box_wrap">
            <div className="box1">
                <Link to='/icecream'>아이스크림</Link>
            </div>
            <div className="box2">
            <Link to='/cake'>케이크</Link>
            </div>
            <div className="box3">
            <Link to='/dessert'>디저트</Link>
            </div>
            <div className="box4">
            <Link to='/coffee'>커피</Link>
            </div>
            <div className="box5">
            <Link to='/drink'>음료</Link>
            </div>

        </div>



    </div>
  )
}
