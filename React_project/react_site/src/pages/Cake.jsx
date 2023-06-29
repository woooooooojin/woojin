import React from 'react'
import cakeData from './cakeData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import Buttons from '../components/Buttons';
import Detail from './Detail'
import { useDispatch } from 'react-redux';
import { addItem } from './store';
import { easeIn, easeInOut, motion } from "framer-motion"

export default function Cake() {
  const [cakes] = useState(cakeData)
  const dispatch = useDispatch()


  return (
    <div>

        <div className='item_wrap'>
          {
              cakes.map((cake,index)=>{
                return(
                
                  <motion.div className="item_box" key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    ease: easeInOut
                }}>
                      <Link to={`/detailcake/${index}`}>
                      
                        <div className="item_img_wrap">
                          <img src={cake.image} alt='img'/>
                        </div>
                        <h4>{cake.title}</h4>
                        <p className='tag'>{cake.tag}</p>
                        <p className='price'>{cake.price}원</p>
                      
                      </Link>  
                      <div className="btn_wrap">
                          <button className='cartBtn' onClick={()=>{dispatch(addItem({id: cake.id, img: cake.image, title: cake.title, price : cake.price ,count: 1}),alert('장바구니에 담겼습니다.'))}}>장바구니</button>
                        </div>
                  </motion.div>



                  
              
                
                )
              })
          }
        </div>

        


    </div>
  )
}
