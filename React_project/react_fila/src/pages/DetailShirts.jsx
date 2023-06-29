import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from './store';
import Buttons from '../components/Buttons'

export default function DetailShirts(props) {
  const {shirts} = props
  const {id} = useParams()
  const dispatch = useDispatch()

  const [selectedOption, setSelectedOption] = useState('')
  const handleOptionChange = (event) => {setSelectedOption(event.target.value)}
  const colorChange = (optionValue) =>{
    if(selectedOption === optionValue){
      return {backgroundColor : '#002053', color:'#fff'};

    }
    return{};
  }


  return (
    <div>

      <div className="detail_wrap">

        <div className="detail_left">
          <img src={shirts[id].image} alt="img" />
        </div>
        <div className="detail_right">
          <div className="detail_tit">{shirts[id].title}</div>
          <div className="detail_desc">{shirts[id].desc}</div>
          <div className="detail_price">{(shirts[id].price).toLocaleString('ko-KR')}원</div>
          <div className="detail_option">

            <div className="opt_wrap">
            <label className='lab01' style={colorChange('M')}>
            <input
            className='opt01'
            name="radio_opt"
            type="radio"
            value="M"
            checked={selectedOption === 'M'}
            onChange={handleOptionChange}
            />
            M
            </label>

            <label className='lab02' style={colorChange('L')}>
                <input
                className='opt02'
                name="radio_opt"
                type="radio"
                value="L"
                checked={selectedOption === 'L'}
                onChange={handleOptionChange}
                />
                L
            </label>

            <label className='lab03' style={colorChange('XL')}>
                <input
                className='opt03'
                name="radio_opt"
                type="radio"
                value="XL"
                checked={selectedOption === 'XL'}
                onChange={handleOptionChange}
                />
                XL
            </label>
            </div>

          </div>



          <Buttons/>


          <div className="delivery_desc">
            <ul>
              <li>배송안내</li>
              <li>· CJ택배 1588-1255</li>
              <li>· 결제 후 대략 영업일 3~5일 이내 배송이 완료됩니다.</li>
              <li>· 상품의 배송 진행 상황은 [주문배송조회] 에서 확인하실 수 있습니다.</li>
              <li>· 특정 상품의 경우 재고 상황에 따라 도착일이 지연될 수 있습니다.</li>
              <li>· 전국배송가능 (해외배송 서비스는 현재 제공되지 않습니다.)</li>
              <li>· 휠라 온라인스토어는 무료 배송 서비스를 제공하고 있습니다.</li>

            </ul>
          </div>

        </div>


      </div>

    </div>
  )
}
