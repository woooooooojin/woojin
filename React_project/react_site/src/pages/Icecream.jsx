import React from 'react'
import iceData from './iceData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 


export default function Icecream() {
  const [ices] = useState(iceData)

  return (
    <div>
      
      {
            ices.map((ice,index)=>{
              return(
              <div className='.item_wrap'>
                <div className="item_box">
                    <Link>
                    

                      <img src={ice.image} alt='img' style={{width:275}}/>
                      <h4>{ice.title}</h4>
                      <p>{ice.tag}</p>
                      <p>{ice.desc}</p>
                      <p>{ice.price}원</p>

                  
                    </Link>  
                </div>
              </div>
               
              )
            })
          }

      </div>
  )
}
