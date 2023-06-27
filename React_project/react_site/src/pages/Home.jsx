import React from 'react'
import{Routes, Route, Link, useNavigate} from 'react-router-dom'; 
import './style.css'
import { easeIn, easeInOut, motion } from "framer-motion"


export default function Home() {
  return (
    <div>
        <div className="box_wrap">
            <motion.div className="box1 box" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut
                }}>
                <Link to='/icecream'>
                  <div className="main_box">
                    <div className="box_tit"><h4>ICECREAM</h4></div>
                    <div className="box_desc"><p>아이스크림의 기준<br />배스킨라빈스</p></div>
                    <img src={process.env.PUBLIC_URL + './img/berryberry.png' } alt="img" />
                    <img className='corn' src={process.env.PUBLIC_URL + './img/corn.png' } alt="img" />
                  </div>

                </Link>
            </motion.div>

            <motion.div className="box2 box" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut
                }}>
              <Link to='/cake'>
                <div className="main_box">
                    <div className="box_tit"><h4>ICECREAM CAKE</h4></div>
                    <div className="box_desc"><p>모두가 좋아하는 아이스크림을<br />하나의 케이크에서 즐기세요 !</p></div>
                    <img src={process.env.PUBLIC_URL + './img/cake01.png' } alt="img" />
                </div>
              </Link>
            </motion.div>

            <motion.div className="box3 box" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut
                }}>
              <Link to='/dessert'>
                <div className="main_box">
                    <div className="box_tit"><h4>DESSERT</h4></div>
                    <div className="box_desc"><p>아이스크림을 더욱 재미있게 !<br />간편하게 즐기는 방법</p></div>
                    <img src={process.env.PUBLIC_URL + './img/dessert01.png' } alt="img" />
                </div>
              </Link>
            </motion.div>

            <motion.div className="box4 box"  
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut
                }}>
            <Link to='/coffee'>
                <div className="main_box">
                    <div className="box_tit"><h4>COFFEE</h4></div>
                    <div className="box_desc"><p>배스킨라빈스만의<br />부드러운 촉감과<br />달콤한 풍미</p></div>
                    <img src={process.env.PUBLIC_URL + './img/coffee01.png' } alt="img" />
                </div>
            </Link>
            </motion.div>

            <motion.div className="box5 box" 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  ease: easeInOut
                }}>
            <Link to='/drink'>
                <div className="main_box">
                    <div className="box_tit"><h4>BEVERAGE</h4></div>
                    <div className="box_desc"><p>아이스크림으로 즐기는<br />배스킨라빈스만의 음료</p></div>
                    <img src={process.env.PUBLIC_URL + './img/drink01.png' } alt="img" />
                </div>
            </Link>
            </motion.div>

        </div>



    </div>
  )
}
