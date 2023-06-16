import React from 'react';
import bests from './productData'
import './style.css'
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


export default function Main(){
    return(
           
        <div>
            <h2 style={{textAlign : 'center', marginTop:'30px'}}>BEST 상품</h2>
            <section className='bestSection'>
                {
                    bests.map((best,idx)=>{
                        return(
                            <div className='best_box' key={best.id}>
                                <img src={best.image} alt={'product_img'+idx} style={{width:'280px',height:'280px'}} />
                                <div className='best_tit'>{best.title}</div>
                                <p className='best_desc'>{best.desc}</p>
                                <p className='best_price'>{best.price}</p>
                                <div className='button_wrap'>
                                    <Button>찜하기</Button>
                                    <Button>장바구니</Button>
                                </div>
                                
                                
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )


}