import { createSlice } from "@reduxjs/toolkit";


const filterByname = (option, payload) =>{
return option.name !== payload.name
}

export const CartSlice = createSlice({
    name:"cart",
    initialState: {cart:[], cartTotal: 0, deliveryCost: 0 , deliveryInfo:false},
    reducers:{
        additem(state, {payload}){
            const findItem = (item) =>{
                return (item.name == payload.name && item.color == payload.color && item.size == payload.size)
            }
           const isInCart =  state.cart.some(findItem)

           
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
                   
                    state.cart = newCart
               }
           
        }, 
        sumupCart(state){
            
           if(state.cart.length == 0){
            state.cartTotal = 0
           }

           if(state.cart.length == 1 || state.cart.length > 1){
           
            const func = (total, item)=>{
                return total += item.totalPrice
            }
            
           const UpdatedTotal = state.cart.reduce(func, 0)
          
           
           state.cartTotal = UpdatedTotal
           }

        },
       
        deliveryDetails(state, {payload}){
            state.deliveryInfo = true 
               
            if(payload === "Lagos" || payload === "Ogun" || payload === "Oyo"){
                state.deliveryCost = 2500
            }
            else{
                state.deliveryCost = 4500
            }
        }
       
    }
});

export const actions = CartSlice.actions