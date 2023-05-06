import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from '../../CartItems';
import { clearAllCart, removeItem, increaseAmounts, decreaseAmounts } from "./Clear";

const initialState = {
    cartItems: cartItems,
    amount: 100,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{  
        clearCart: (state) => {
            clearAllCart(state)
        },
        removeCart: (state, action) => removeItem(state, action),
        increaseAmount: (state, action) => increaseAmounts(state, action),
        decreaseAmount: (state, action) => decreaseAmounts(state, action),
        calculateTotal: (state, action) => calculateTotal(state, action)
        

    }
});
export const { clearCart, removeCart, increaseAmount, decreaseAmount } = cartSlice.actions;
export default cartSlice.reducer;