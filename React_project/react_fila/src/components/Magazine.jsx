import React from 'react'
import './components.css' 




export default function Magazine() {

    const mgzData= [
        {
          id: 'mgz01',
          image: process.env.PUBLIC_URL+'/img/mgz01.jpg',
          title: 'ACC For MY First Court',
        },
        {
            id: 'mgz02',
            image: process.env.PUBLIC_URL+'/img/mgz02.jpg',
            title: 'TENNIS SUMMER SHOES',
          },
          {
            id: 'mgz03',
            image: process.env.PUBLIC_URL+'/img/mgz03.gif',
            title: 'DRIFER TUBE THONG',
          },
          {
            id: 'mgz04',
            image: process.env.PUBLIC_URL+'/img/mgz04.jpg',
            title: 'STAY COOL W/BALL CAP',
          },
       
      ]
    
  return (
    <div>
        
        <div className="mgz_wrap">
            {
                mgzData.map((val,idx)=>{
                    return(
                    <div className="mgz_box" key={idx}>
                        <img src={val.image} alt="img" />
                        <p>{val.title}</p>
                    </div>
                    )
                        
                })
            }
        </div>

    </div>
  )
}
