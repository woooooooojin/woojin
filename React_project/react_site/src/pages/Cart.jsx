import React from 'react'
import './style.css'
import {useDispatch, useSelector} from 'react-redux'
import { addCount, deleteItem, minCount } from './store'


export default function Cart() {

    const state = useSelector((state)=>state)
    const dispatch = useDispatch()

    //총합계 고민중,,
//    const price = document.querySelectorAll('.cart_price')
//    const totalPrice = document.querySelector('.total_price')
//    let result = 0;

//    for(let i =0; i<price.length; i++){
//     result += parseInt(price[i].textContent)
//     totalPrice.innerHTML = result + 3500
//    }

let result = 0;
 state.cart.map((val,idx)=>{
    return(
        
        result += (state.cart[idx].price * state.cart[idx].count)
    )
})


  return (
    
    
    <div>

        
        <div className="cart_wrap">
            <h4>장바구니</h4>
            <ul className='cart_tit'>
                <li>품번</li>
                <li>주문상품</li>
                <li>가격</li>
                <li>상품개수</li>
                <li>수량</li>
            </ul>
            <ul className='maplist'>
                {
                    state.cart.map((item,i)=>{
                        

                        return(
                        <li key={item} className='cartlist'>
                            <div className="cart_id">{state.cart[i].id}</div>
                            <div className="cart_img">
                                <img src={state.cart[i].img} alt="img"/> 
                            </div>
                            <div className="cart_title">{state.cart[i].title}</div>
                            <div className="cart_price">{state.cart[i].price * state.cart[i].count}원</div>
                            <div className="cart_count">{state.cart[i].count}개</div>
                            <div className="cart_btns">
                                <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                                <button  onClick={()=>dispatch(deleteItem(state.cart[i].id))}>삭제</button>
                                <button  onClick={()=>dispatch(minCount(state.cart[i].id))}>-</button>
                            </div>
                        </li>
                        
                        )
                        
                    })
                }
                    
            </ul>


            
            <div>
                <p className='total_price'>Total : {result.toLocaleString()}원</p>
            </div>



        </div>



    </div>
  )
}
