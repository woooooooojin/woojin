import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from './store';


export default function DetailCake(props2) {
  const {cakes} = props2
  const {id} = useParams()
  const dispatch = useDispatch()
  

  return (
    <div>

        <div className="detail_wrap">
          <div className="top_img">
            <img src={process.env.PUBLIC_URL + '../img/icon_title_top.png' } alt="img" />
          </div>

          <div className="detail_left">
            <h2 className='detail_tit'>{cakes[id].title}</h2>
            <p className='detail_desc'>{cakes[id].desc}</p>

          </div>


          <div className="detail_right">
            <img src={cakes[id].image} alt='img'/>
          </div>

          <div className="line_wrap">
            <div className="line"></div>
            <div className="line_btn" onClick={()=>{dispatch(addItem({id: cakes[id].id, img: cakes[id].image, title: cakes[id].title, price : cakes[id].price ,count: 1}),alert('장바구니에 담았습니다.'))}}>장바구니</div>
          </div>


          <div className="detail_txt">

            <ul>
              <li>[이용안내]</li>
              <li>- 본 상품은 예시 이미지로서 실제 상품과 다를 수 있습니다.</li>
              <li>- 물품형 상품권은 상품명에 기재된 물품으로 교환됩니다.</li>
              <li>- 동일상품 교환이 불가한 경우 쿠폰가격 이상의 다른상품으로 교환 가능하며, 초과금액은 추가 지불하여야 합니다. </li>
            </ul>

            <ul>
              <li>[할인/적립/해피오더 사용 안내]</li>
              <li>- 제휴카드 할인/매장 할인행사/온라인쿠폰 중복적용 불가합니다.</li>
              <li>- 해피오더 사용 등은 교환처의 정책에 따릅니다.</li>
            </ul>

  
          </div>
          

          
                 

        </div>

      
      
    </div>
  )
}
