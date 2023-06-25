import React from 'react'
import iceData from './iceData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import Buttons from '../components/Buttons';
import Detail from './Detail'
import { useDispatch } from 'react-redux';
import { addItem } from './store';


export default function Icecream() {
  const [ices] = useState(iceData)
  // const {id} = useParams()
  const dispatch = useDispatch()

  return (
    <div>
      <div className='item_wrap'>
        {
            ices.map((ice,index)=>{
              return(
              
                <div className="item_box" key={index}>
                    <Link to={`/detail/${index}`}>
                    
                      <div className="item_img_wrap">
                        <img src={ice.image} alt='img'/>
                      </div>
                      <h4>{ice.title}</h4>
                      <p className='tag'>{ice.tag}</p>
                      <p className='price'>{ice.price}원</p>
                     
                    </Link>  
                    <div className="btn_wrap">
                        <button className='cartBtn' onClick={()=>{dispatch(addItem({id: ice.id, img: ice.image, title: ice.title, price : ice.price ,count: 1}))}}>장바구니</button>
                      </div>
                </div>



                
            
               
              )
            })
        }
         </div>

        
      </div>
  )
}
