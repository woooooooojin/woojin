import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`

    display: inline-block;
    width: 50%;
    height: 50px;
    background-color: #ccc;
    line-height: 50px;
    border: 1px solid #eee;
    transition: .3s;
    &:hover{
        background-color: #eee;
    }
`

export default function Detail(props) {

  const {bests} = props
  const {id} = useParams()


  return (
    <div>
      <h2>Detail Page</h2>
      <img src={bests[id].image} alt="img" style={{width:500}} />
      <h4>{bests[id].title}</h4>
      <p>{bests[id].price}</p>
      
      <Button>찜하기</Button>
      <Button>장바구니</Button>
    </div>
  )
}
