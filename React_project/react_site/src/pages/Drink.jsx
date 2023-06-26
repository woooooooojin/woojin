import React from 'react'
import drinkData from './drinkData';
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import Buttons from '../components/Buttons';
import Detail from './Detail'
import { useDispatch } from 'react-redux';
import { addItem } from './store';

export default function Drink() {
  const [drinks] = useState(drinkData)
  const dispatch = useDispatch()
  return (
    <div>

      <div className='item_wrap'>
            {
                drinks.map((drink,index)=>{
                  return(
                  
                    <div className="item_box" key={index}>
                        <Link to={`/detaildrink/${index}`}>
                        
                          <div className="item_img_wrap">
                            <img src={drink.image} alt='img'/>
                          </div>
                          <h4>{drink.title}</h4>
                          <p className='tag'>{drink.tag}</p>
                          <p className='price'>{drink.price}원</p>
                        
                        </Link>  
                        <div className="btn_wrap">
                            <button className='cartBtn' onClick={()=>{dispatch(addItem({id: drink.id, img: drink.image, title: drink.title, price : drink.price ,count: 1}))}}>장바구니</button>
                          </div>
                    </div>



                    
                
                  
                  )
                })
            }
      </div>

    </div>
  )
}
