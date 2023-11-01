import { configureStore } from "@reduxjs/toolkit";
import CartReducer from  './Feature/Cart/CartSlice';


const store = configureStore({
    reducer: CartReducer
});

export default store