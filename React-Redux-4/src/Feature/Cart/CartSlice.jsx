import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = `https://course-api.com/react-useReducer-cart-project`
const initialState = {
    cartItems: [],
    isLoading: false
}
export const getItems = createAsyncThunk('cart/getCartItems', async() => {
    const fetchData = await fetch(url)
    const result = await fetchData.json()
    return result
});

console.log(getItems, ' getItesm s')
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        add: (state, action) => console.log(action.payload)
    },
    extraReducers: {
        [getItems.pending]: (state, action) => console.log(`promise is pending `),
        [getItems.fulfilled]: (state, action) => {
            console.log(`promise is fullfillec ${JSON.stringify(action.payload)} `);
            state.cartItems = action.payload
        },
        [getItems.rejected]: (state, action) => console.log(`promise is rejected `),

    }
});

export const { add } = cartSlice.actions

console.log(cartSlice)
export default cartSlice.reducer
