import React from 'react'
import coffeeData from './coffeeData'
import {useState} from 'react'
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import './style.css'
import { useDispatch } from 'react-redux';
import { addItem } from './store';

export default function Coffee() {

  const [coffees] = useState(coffeeData)
  const dispatch = useDispatch()

  return (
    <div>

        <div className='item_wrap'>
            {
                coffees.map((coffee,index)=>{
                  return(
                  
                    <div className="item_box" key={index}>
                        <Link to={`/detailcoffee/${index}`}>
                        
                          <div className="item_img_wrap">
                            <img src={coffee.image} alt='img'/>
                          </div>
                          <h4>{coffee.title}</h4>
                          <p className='tag'>{coffee.tag}</p>
                          <p className='price'>{coffee.price}원</p>
                        
                        </Link>  
                        <div className="btn_wrap">
                            <button className='cartBtn' onClick={()=>{dispatch(addItem({id: coffee.id, img: coffee.image, title: coffee.title, price : coffee.price ,count: 1}))}}>장바구니</button>
                          </div>
                    </div>



                    
                
                  
                  )
                })
            }
      </div>


    </div>
  )
}
