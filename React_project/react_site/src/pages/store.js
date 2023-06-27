import {configureStore, createSlice } from '@reduxjs/toolkit';


const cart = createSlice({
    name : 'cart',
    initialState : [],
    reducers : {
        addItem(state, action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload.id})
            if(index > -1){
                state[index].count++
            }else{
                state.push(action.payload)
            }
        },
        deleteItem(state, action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            state.splice(index,1)
        },
        addCount(state, action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            state[index].count++
        },
        minCount(state, action){
            const index = state.findIndex((findId)=>{return findId.id === action.payload})
            if(state[index].count > 1){
            state[index].count--

            }
        },
        // inputVal: (state, action) => {
        //     state.selectedOption = action.payload;
        //   },
        
        
    }


})

export const {addItem,deleteItem,addCount,minCount} = cart.actions 
//dispatch 



export default configureStore({
    reducer : {
        cart: cart.reducer
    }
})
//useSelector









