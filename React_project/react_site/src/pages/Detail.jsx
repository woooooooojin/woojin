import React from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

export default function Detail(props) {
  const {ices} = props
  const {id} = useParams()
  return (
    <div>

        <div className="detail_wrap">
          <div className="detail_right">
            <img src={ices[id].image} alt='img'/>
          </div>

          <div className="detail_left">
            <h2 className='detail_tit'>{ices[id].title}</h2>
            <p className='detail_desc'>{ices[id].desc}</p>
            <p className='detail_price'>{ices[id].price}</p>
          </div>
         

        </div>

      
      
    </div>
  )
}
