import React from 'react'
import iceData from './iceData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import { useDispatch } from 'react-redux';
import { addItem } from './store';
import { easeIn, easeInOut, easeOut, motion } from "framer-motion"


export default function Icecream() {
  const [ices] = useState(iceData)
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
    hidden: { opacity:0.5, scale:0.8 },
    visible: { opacity:1, scale:1 },
    ease:easeOut
    
  }


  return (
    <div>
      <motion.div className='item_wrap' variants={list} initial="hidden" animate="visible">
        {
            ices.map((ice,index)=>{
              return(
              
                <motion.div className="item_box" key={index} variants={item} >
                    <Link to={`/detail/${index}`}>
                    
                      <div className="item_img_wrap">
                        <img src={ice.image} alt='img'/>
                        <img src={process.env.PUBLIC_URL + '/img/corn.png' } alt="img" />
                      </div>
                      <h4>{ice.title}</h4>
                      <p className='tag'>{ice.tag}</p>
                      <p className='price'>{ice.price}원</p>
                     
                    </Link>  
                    <div className="btn_wrap">
                        <button className='cartBtn' onClick={()=>{dispatch(addItem({id: ice.id, img: ice.image, title: ice.title, price : ice.price ,count: 1}))}}>장바구니</button>
                      </div>
                </motion.div>



                
            
               
              )
            })
        }
         </motion.div>

        
      </div>
  )
}
