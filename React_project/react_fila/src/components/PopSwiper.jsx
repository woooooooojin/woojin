import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import './components.css' 
import styled from 'styled-components'

import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Button = styled.button`

    width: calc(50% - 30px);
    margin-left: 20px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 30px;
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
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




export default function PopSwiper() {
  

    const popData= [
        {
          id: 'visual01',
          image: process.env.PUBLIC_URL+'/img/main/recommand/01.jpg',
          price: 119000,
          title: 'FILA 자켓',
        },
        {
            id: 'visual02',
            image: process.env.PUBLIC_URL+'/img/main/recommand/02.jpg',
            price: 89000,
            title: 'FILA 로고 바람막이',
          },
          {
            id: 'visual03',
            image: process.env.PUBLIC_URL+'/img/main/recommand/03.jpg',
            price: 56000,
            title: 'FILA 크롭 후드티',
          },
          {
            id: 'visual04',
            image: process.env.PUBLIC_URL+'/img/main/recommand/04.jpg',
            price: 89000,
            title: 'FILA 로고 아노락',
          },
          {
            id: 'visual05',
            image: process.env.PUBLIC_URL+'/img/main/recommand/05.jpg',
            price: 119000,
            title: '스트링 조거팬츠',
          },
       
          {
            id: 'visual06',
            image: process.env.PUBLIC_URL+'/img/main/recommand/07.jpg',
            price: 129000,
            title: '베이직 로고 후드티',
          },
       
       
        
      ]

  return (
    <div>

        <Swiper
        className='pop_swiper'
        spaceBetween={50}
        slidesPerView={5}
        modules={[Navigation, A11y, Autoplay]}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        // centeredSlides={true}
        >
            <div className="pop_swiper_cont">
                {
                    popData.map((val,idx)=>{
                        return(
                        <SwiperSlide key={idx} className='pop_slide'>
                            <div className="pop_box">
                                <img src={val.image} alt="img" />
                                <p className='pop_tit'>{val.title}</p>
                                <p className='pop_price'>{val.price.toLocaleString('kr-KR') + '원'}</p>
                                <div className="btn_wrap">
                                    <Button>장바구니</Button>
                                    <Button>구매하기</Button>
                                </div>
                                
                            </div>
                        </SwiperSlide>
                        )
                       
                        
                    })
                }
            </div>
           
        </Swiper>
    </div>
  )
}
