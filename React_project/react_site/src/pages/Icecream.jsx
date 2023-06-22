import React from 'react'
import iceData from './iceData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 
import './style.css'
import Buttons from '../components/Buttons';


export default function Icecream() {
  const [ices] = useState(iceData)

  return (
    <div>
      <div className='item_wrap'>
        {
            ices.map((ice,index)=>{
              return(
              
                <div className="item_box">
                    <Link to={`detail/${index}`}>
                    
                      <div className="item_img_wrap">
                        <img src={ice.image} alt='img'/>
                      </div>
                      <h4>{ice.title}</h4>
                      <p className='tag'>{ice.tag}</p>
                      <p className='price'>{ice.price}원</p>
                      <div className="btn_wrap">
                        <Buttons />
                      </div>

                  
                    </Link>  
                </div>



                
            
               
              )
            })
        }
         </div>
      </div>
  )
}
