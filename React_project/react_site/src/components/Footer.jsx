import React from 'react'
import './components.css'


export default function Footer() {
  return (
    <div>
        <div className='foot_wrap'>
            <img src={process.env.PUBLIC_URL + '/img/happypoint.png' } alt="img" />
            <img src={process.env.PUBLIC_URL + '/img/happymarket.png' } alt="img" />
            <img src={process.env.PUBLIC_URL + '/img/spc_story.png' } alt="img" />
            <img src={process.env.PUBLIC_URL + '/img/norton.gif' } alt="img" />
            <img src={process.env.PUBLIC_URL + '/img/ccm01.png' } alt="img" />
            <img src={process.env.PUBLIC_URL + '/img/ksa.png' } alt="img" />
            
        </div>
        <div className="foot_logo">
              <img src={process.env.PUBLIC_URL + '/img/footer_logo.png' } alt="img" />
              <p>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
        </div>
        
    </div>
  )
}
