import React from 'react'
import dessertData from './dessertData';
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import { useDispatch } from 'react-redux';
import { addItem } from './store';

import { easeIn, easeInOut, easeOut, motion } from "framer-motion"

export default function Dessert() {
  const [desserts] = useState(dessertData)
  const dispatch = useDispatch()

  const list={
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }
  const item={
    hidden: { opacity:0.0, scale:0.5 },
    visible: { opacity:1, scale:1 },
    ease:easeOut
    
  }

  return (
    <div>
        <div className='item_wrap'>
            {
                desserts.map((dessert,index)=>{
                  return(
                  
                    <motion.div className="item_box" key={index} variants={list} initial="hidden" animate="visible">
                        <Link to={`/detaildessert/${index}`}>
                        
                          <div className="item_img_wrap">
                            <motion.img src={dessert.image} alt='img' variants={item} />
                          </div>
                          <h4>{dessert.title}</h4>
                          <p className='tag'>{dessert.tag}</p>
                          <p className='price'>{dessert.price}원</p>
                        
                        </Link>  
                        <div className="btn_wrap">
                            <button className='cartBtn' onClick={()=>{dispatch(addItem({id: dessert.id, img: dessert.image, title: dessert.title, price : dessert.price ,count: 1}))}}>장바구니</button>
                          </div>
                    </motion.div>



                    
                
                  
                  )
                })
            }
      </div>
    </div>
  )
}
