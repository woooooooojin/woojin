import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addItem } from './store';


export default function Detail(props) {
  const {ices} = props
  const {id} = useParams()
  const dispatch = useDispatch()
  

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
            <div className="line_btn" onClick={()=>{dispatch(addItem({id: ices[id].id, img: ices[id].image, title: ices[id].title, price : ices[id].price ,count: 1}))}}>장바구니</div>
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

          {/* <div className="option01">
            <div className="opt_tit"><h4>CONE & CUP</h4></div>
              <ul>
              <li>
                  <input type="radio" id='size01' name='sizeRadio' htmlFor='size01' defaultChecked value={3800} />
                  <label htmlFor="size01" className='size01label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c1' src={process.env.PUBLIC_URL + '../img/ico_c1.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>

                <li>
                  <input type="radio" id='size02' name='sizeRadio' htmlFor='size02' value={4500} />
                  <label htmlFor="size02" className='size02label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c2' src={process.env.PUBLIC_URL + '../img/ico_c2.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>

                <li>
                  <input type="radio" id='size03' name='sizeRadio' htmlFor='size03' />
                  <label htmlFor="size03" className='size03label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c3' src={process.env.PUBLIC_URL + '../img/ico_c3.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>

                <li>
                  <input type="radio" id='size04' name='sizeRadio' htmlFor='size04' />
                  <label htmlFor="size04" className='size04label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c4' src={process.env.PUBLIC_URL + '/img/ico_c4.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>
              </ul>

          </div>

          
          <div className="option02">
            <div className="opt_tit"><h4>CONE & CUP</h4></div>
              <ul>
              <li>
                  <input type="radio" id='size05' name='sizeRadio' htmlFor='size05'  />
                  <label htmlFor="size05" className='size05label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c1' src={process.env.PUBLIC_URL + '/img/ico_c1.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>

                <li>
                  <input type="radio" id='size06' name='sizeRadio' htmlFor='size06' />
                  <label htmlFor="size06" className='size06label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c2' src={process.env.PUBLIC_URL + '../img/ico_c2.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>

                <li>
                  <input type="radio" id='size07' name='sizeRadio' htmlFor='size07' />
                  <label htmlFor="size07" className='size07label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c3' src={process.env.PUBLIC_URL + '../img/ico_c3.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>

                <li>
                  <input type="radio" id='size08' name='sizeRadio' htmlFor='size08' />
                  <label htmlFor="size08" className='size08label'>
                    <div className="label_wrap">
                      <div className="li_left">
                        <img className='c4' src={process.env.PUBLIC_URL + '../img/ico_c4.gif' } alt="img" />
                      </div>
                      <div className="li_right">
                        <p>싱글레귤러</p>
                        <p>3500원</p>
                      </div>
                    </div>
                  </label>
                  
                </li>
              </ul>

          </div> */}

          

          
          {/* <div className="total_price">
            <span></span>  
          </div>          */}

        </div>

      
      
    </div>
  )
}
