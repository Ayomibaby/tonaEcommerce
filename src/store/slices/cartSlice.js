import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState: {cart:[]},
    reducers:{
        additem(state, {payload}){
            state.cart.push(payload)
            console.log("done")
        },

    }
});

export const actions = CartSlice.actions