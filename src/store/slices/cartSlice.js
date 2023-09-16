import { createSlice } from "@reduxjs/toolkit";

//write condition seperately 
const filterByname = (option, payload) =>{
return option.name !== payload.name
}

export const CartSlice = createSlice({
    name:"cart",
    initialState: {cart:[], cartTotal: 0, },
    reducers:{
        additem(state, {payload}){
            const findItem = (item) =>{
                return (item.name == payload.name && item.color == payload.color && item.size == payload.size)
            }
           const isInCart =  state.cart.some(findItem)

           console.log(isInCart)
           if(!isInCart){
            state.cart.push(payload)
           }
           if(isInCart){
           const item = state.cart.find(findItem)
           item.quantity++
           }
            
           
          
        },
        removeItem(state,{payload}){

          
           let newCart = state.cart?.filter((option)=>(option.name !== payload))
         
           state.cart = newCart
        },
        clearCart(state){
            
            let newArr = []
            state.cart = newArr
        }, 
        incrementCart(state, {payload}){
         const indextoEdit =  state.cart.findIndex((item)=>item.name == payload)

         state.cart[indextoEdit].quantity += 1
        const updatedTotal = state.cart[indextoEdit].price * state.cart[indextoEdit].quantity
        state.cart[indextoEdit].totalPrice = updatedTotal
        },
        decrementCart(state, {payload}){
            const indextoEdit =  state.cart.findIndex((item)=>item.name == payload)

            if(state.cart[indextoEdit].quantity > 1){
                state.cart[indextoEdit].quantity -= 1
                const updatedTotal = state.cart[indextoEdit].price * state.cart[indextoEdit].quantity
                state.cart[indextoEdit].totalPrice = updatedTotal
               }else {
                let newCart = state.cart?.filter((option)=>(option.name !== payload))
                    console.log(state.cart[indextoEdit].quantity)
                    state.cart = newCart
               }
           
        }, 
        sumupCart(state){
            console.log(state.cart.length)
           if(state.cart.length == 0){
            state.cartTotal = 0
           }

           if(state.cart.length == 1 || state.cart.length > 1){
            // console.log("hello")
            const func = (total, item)=>{
                return total += item.totalPrice
            }
            
           const UpdatedTotal = state.cart.reduce(func, 0)
          
           console.log(UpdatedTotal, "updated Total")
           state.cartTotal = UpdatedTotal
           }

        },
       
    }
});

export const actions = CartSlice.actions