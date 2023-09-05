
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cartSlice";


const Store = configureStore({
    reducer: {
        Cart: CartSlice.reducer
    }
})

export default Store