import React from 'react';
import './style.css'
import styled from 'styled-components'

export default function Header(){
    return(
        
        <div>
            <div>
                <ul className='gnb'>
                <li>login</li>
                <li>join</li>
                <li>language</li>
                <li>sitemap</li>
                </ul>
            </div>

           <ul className = 'lnb'>
                <li>lnb1</li>
                <li>lnb2</li>
                <li>lnb3</li>
                <li>lnb4</li>
                <li>lnb5</li>
           </ul>


        </div>
    )


}