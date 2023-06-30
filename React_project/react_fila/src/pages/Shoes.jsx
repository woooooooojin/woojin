import React from 'react'
import './style.css' 
import{Routes, Route, Link, useNavigate, useParams} from 'react-router-dom'; 
import {useState} from 'react'
import styled from 'styled-components'

import { useDispatch } from 'react-redux';
import { addItem } from '../pages/store';
import shoesData from './shoesData';


const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 40px;
    border: 1px solid #002053;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    background-color: transparent;
    transition: .3s;
    background-color: #002053;
    color:#fff;
    margin-bottom: 20px;
    &:hover{
        background-color: #fff;
        color:#000;
        border: 1px solid #ccc;
    }
    &:nth-child(2){
        /* margin-right: 20px; */
    }
 `


export default function Shoes() {
  const [shoes] = useState(shoesData)
  const dispatch = useDispatch()


  return (
    <div>

<div className="category_tit">
        <h2>Shoes</h2>
      </div>

      <div className="itembox_wrap">

        {
          shoes.map((shoes,idx) => {
            return(

              <div className="item_box" key={idx}>
                <Link to={`/detailshoes/${idx}`}>
                  <div className="item_img_wrap">
                    <img src={shoes.image} alt="img"/>
                  </div>
                  <h4 className='item_tit'>{shoes.title}</h4>
                  <p className='item_tag'>{shoes.tag}</p>
                  <p className='item_price'>{(shoes.price).toLocaleString('ko-KR')}원</p>
                </Link>

                
                
                
                <Button onClick={()=>{dispatch(addItem({id: shoes.id, img: shoes.image, title: shoes.title, price : shoes.price ,count: 1}), alert('장바구니에 담겼습니다.'))}}>장바구니</Button>
                <Button onClick={()=>{dispatch(addItem({id: shoes.id, img: shoes.image, title: shoes.title, price : shoes.price ,count: 1}), alert('장바구니를 확인해주세요.'))}}>구매하기</Button>
              </div>

            )
          })
        }

          



      </div>


    </div>
  )
}
