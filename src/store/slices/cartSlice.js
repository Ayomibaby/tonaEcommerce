import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState: {cart:[]},
    reducers:{
        additem(state, {payload}){
            state.cart.push(payload)
            console.log("done")
        },
        removeItem(state,{payload}){
            
        },
        clearCart(state, {payload}){
            state.cart.length = 0
        }
    }
});

export const actions = CartSlice.actions