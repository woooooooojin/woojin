import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

export default function Detail(props) {
  const {ices} = props
  const {id} = useParams()
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
          </div>

          <div className="line_wrap">
            <div className="line"></div>
            <div className="line_btn">먹고싶지?</div>
          </div>

          
         

        </div>

      
      
    </div>
  )
}
