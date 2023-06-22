import React from 'react'
import styled from 'styled-components'
import './components.css'

const Button1 = styled.button`
    display: inline-block;
    width: calc(50% - 10px);
    height: 50px;
    background-color: rgb(250,250,250);
    line-height: 50px;
    border: 1px solid #eee;
    border-radius: 30px;
    transition: .3s;
    margin-bottom: 10px;
    color: #6d6c6c;
    &:hover{
        background-color: #f489a0;
        color: #fff;
    }
    &:first-child{
        margin-right: 20px;
    }
`


export default function Buttons() {
  return (
    <div>

        <Button1>장바구니</Button1>
        <Button1>구매하기</Button1>

    </div>
  )
}
