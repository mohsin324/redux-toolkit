import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../../CartItem";
import { remove, clear, increaseAmount, decreaseAmount, calculateTotalAmounts } from "./Clear";
// initial state
const initialState = {
    cartItems,
    amount: 4,
    total: 0,
    isLoading: false
}

// invoke createSlice function 
// it will take two arguments 1. name 2. state
// debugger;
const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        // clear cart
        clearCart: (state, action) => clear(state, action),
        // remove item
        removeCartItem: (state, action) => remove(state, action),
        // increase amount
        amountIncrease: (state, action) => increaseAmount(state, action),
        // decrease amount
        amountDecrease: (state, action) => decreaseAmount(state, action),
        // total amount 
        totalAmount: (state, action) => calculateTotalAmounts(state, action)

    }
});
export const { clearCart, removeCartItem, amountIncrease, amountDecrease, totalAmount } = cartSlice.actions;
export default cartSlice.reducer;

