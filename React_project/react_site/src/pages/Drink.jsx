import React from 'react'
import drinkData from './drinkData';
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import Buttons from '../components/Buttons';
import Detail from './Detail'
import { useDispatch } from 'react-redux';
import { addItem } from './store';

import { easeIn, easeInOut, easeOut, motion } from "framer-motion"

export default function Drink() {
  const [drinks] = useState(drinkData)
  const dispatch = useDispatch()

  const list={
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  }
  const item={
    hidden: { opacity:0, scale:0.5 },
    visible: { opacity:1, scale:1 },
    ease:easeOut
    
  }


  return (
    <div>

      <div className='item_wrap' >
            {
                drinks.map((drink,index)=>{
                  return(
                  
                    <motion.div className="item_box" key={index} variants={list} initial="hidden" animate="visible">
                        <Link to={`/detaildrink/${index}`}>
                        
                          <div className="item_img_wrap">
                            <motion.img src={drink.image} alt='img' variants={item}/>
                          </div>
                          <h4>{drink.title}</h4>
                          <p className='tag'>{drink.tag}</p>
                          <p className='price'>{drink.price}원</p>
                        
                        </Link>  
                        <div className="btn_wrap">
                            <button className='cartBtn' onClick={()=>{dispatch(addItem({id: drink.id, img: drink.image, title: drink.title, price : drink.price ,count: 1}),alert('장바구니에 담겼습니다.'))}}>장바구니</button>
                          </div>
                    </motion.div>



                    
                
                  
                  )
                })
            }
      </div>

    </div>
  )
}
