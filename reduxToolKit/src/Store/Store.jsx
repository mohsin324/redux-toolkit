import { configureStore } from "@reduxjs/toolkit";
// import cartSlice
import cartReducer from  '../Features/Cart/CartSlice';
// create store
export const store = configureStore({
    reducer: { 
        cart: cartReducer,
    }
});