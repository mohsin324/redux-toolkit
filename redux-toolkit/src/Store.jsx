import { configureStore } from "@reduxjs/toolkit";
import cartSlice from  './Features/Cart/CartSlice';




export const store = configureStore ({
    reducer: {
        cart: cartSlice
    },
});


