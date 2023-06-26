import React from 'react'
import dessertData from './dessertData';
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import { useDispatch } from 'react-redux';
import { addItem } from './store';

export default function Dessert() {
  const [desserts] = useState(dessertData)
  const dispatch = useDispatch()
  return (
    <div>
        <div className='item_wrap'>
            {
                desserts.map((dessert,index)=>{
                  return(
                  
                    <div className="item_box" key={index}>
                        <Link to={`/detaildessert/${index}`}>
                        
                          <div className="item_img_wrap">
                            <img src={dessert.image} alt='img'/>
                          </div>
                          <h4>{dessert.title}</h4>
                          <p className='tag'>{dessert.tag}</p>
                          <p className='price'>{dessert.price}원</p>
                        
                        </Link>  
                        <div className="btn_wrap">
                            <button className='cartBtn' onClick={()=>{dispatch(addItem({id: dessert.id, img: dessert.image, title: dessert.title, price : dessert.price ,count: 1}))}}>장바구니</button>
                          </div>
                    </div>



                    
                
                  
                  )
                })
            }
      </div>
    </div>
  )
}
