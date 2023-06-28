import React from 'react'
import './components.css' 
import styled from 'styled-components'

const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 18px;
    background-color: transparent;
    transition: .3s;
    &:hover{
        background-color: #002053;
        color:#fff;
    }
    &:nth-child(2){
        margin-right: 20px;
    }
 `


export default function Buttons() {
  return (
    <div>
        <div className="btn_wrap">
            <Button>장바구니</Button>
            <Button>구매하기</Button>
        </div>

    </div>
  )
}
