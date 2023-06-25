import React from 'react'
import cakeData from './cakeData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import Buttons from '../components/Buttons';
import Detail from './Detail'
import { useDispatch } from 'react-redux';
import { addItem } from './store';

export default function Cake() {
  const [cakes] = useState(cakeData)
  const dispatch = useDispatch()


  return (
    <div>

        <div className='item_wrap'>
          {
              cakes.map((cake,index)=>{
                return(
                
                  <div className="item_box" key={index}>
                      <Link to={`/detailcake/${index}`}>
                      
                        <div className="item_img_wrap">
                          <img src={cake.image} alt='img'/>
                        </div>
                        <h4>{cake.title}</h4>
                        <p className='tag'>{cake.tag}</p>
                        <p className='price'>{cake.price}원</p>
                      
                      </Link>  
                      <div className="btn_wrap">
                          <button className='cartBtn' onClick={()=>{dispatch(addItem({id: cake.id, img: cake.image, title: cake.title, price : cake.price ,count: 1}))}}>장바구니</button>
                        </div>
                  </div>



                  
              
                
                )
              })
          }
        </div>

        


    </div>
  )
}
