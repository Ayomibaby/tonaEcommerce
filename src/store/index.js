
import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/cartSlice";
import { authSlice } from "./slices/authSlice";


const Store = configureStore({
    reducer: {
        Cart: CartSlice.reducer,
        Auth: authSlice.reducer
    }
})

export default Store