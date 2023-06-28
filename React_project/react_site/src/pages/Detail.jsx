import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from './store';
// import RadioBtn from '../components/RadioBtn';


export default function Detail(props) {
  const {ices} = props
  const {id} = useParams()
  const dispatch = useDispatch()


  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {setSelectedOption(event.target.value)}
  const colorChange = (optionValue) => {
      if (selectedOption === optionValue) {
        return { backgroundColor: '#f489a0', color : '#fff'};
      }
      return {};
  };

  return (
    <div>

        <div className="detail_wrap">
          <div className="top_img">
            <img src={process.env.PUBLIC_URL + '../img/icon_title_top.png' } alt="img" />
          </div>

          <div className="detail_left">
            <h2 className='detail_tit'>{ices[id].title}</h2>
            <p className='detail_desc'>{ices[id].desc}</p>

          </div>


          <div className="detail_right">
            <img src={ices[id].image} alt='img'/>
            <img src={process.env.PUBLIC_URL + '/img/corn.png' } alt="img" />

          </div>

          <div className="line_wrap">
            <div className="line"></div>
            <div className="line_btn" onClick={()=>{dispatch(addItem({id: ices[id].id, img: ices[id].image, title: ices[id].title, price : (ices[id].price + parseInt(selectedOption)) ,count: 1}))}}>장바구니</div>
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


          <div className="input_wrap">
            {/* <RadioBtn/> */}

            <label className='lab01' style={colorChange('0')}>
            <input
            className='opt01'
            name="radio_opt"
            type="radio"
            value="0"
            checked={selectedOption === '0'}
            onChange={handleOptionChange}
            defaultChecked={true}
            />
            싱글레귤러
            </label>

            <label className='lab02' style={colorChange('800')}>
                <input
                className='opt02'
                name="radio_opt"
                type="radio"
                value="800"
                checked={selectedOption === '800'}
                onChange={handleOptionChange}
                />
                싱글킹
            </label>

            <label className='lab03' style={colorChange('1300')}>
                <input
                className='opt03'
                name="radio_opt"
                type="radio"
                value="1300"
                checked={selectedOption === '1300'}
                onChange={handleOptionChange}
                />
                더블주니어
            </label>

            <label className='lab04' style={colorChange('3300')}>
                <input
                className='opt04'
                name="radio_opt"
                type="radio"
                value="3300"
                checked={selectedOption === '3300'}
                onChange={handleOptionChange}
                />
                더블레귤러
            </label>

            <p className='opt_price'>옵션가격 : +{selectedOption}원</p>
             
          </div>

         

        </div>

      
      
    </div>
  )
}
