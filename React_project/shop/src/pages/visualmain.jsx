import React from 'react';
import bests from './productData'
import './style.css'
import styled from 'styled-components'

export default function VisualMain(){
    return(
           
        <div>
          <img src={ process.env.PUBLIC_URL + '/images/../images/visual_main_01.jpg'} alt="" />
        </div>
    )


}