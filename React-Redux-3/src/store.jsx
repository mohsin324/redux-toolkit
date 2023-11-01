import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Features/Cart/CartSlice';
import ModalReducer from './Modal/ModalSlice';
import AsyncCart from "./Features/AsyncCart";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        Modal: ModalReducer,
        asyncCart: AsyncCart
    }
})