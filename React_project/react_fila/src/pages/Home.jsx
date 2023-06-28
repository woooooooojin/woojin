import React from 'react'
import VisualMain from '../components/VisualMain'
import PopSwiper from '../components/PopSwiper'
import './style.css' 
import Magazine from '../components/Magazine'


export default function Home() {
  return (
    <div>
      <VisualMain/>
      

    
      <div className="home_wrap">
        <div className="pop_title">
          <h4>지금 많이 찾는 상품</h4>
        </div>

        <PopSwiper />

        <Magazine />

      </div>

      

    </div>
  )
}
