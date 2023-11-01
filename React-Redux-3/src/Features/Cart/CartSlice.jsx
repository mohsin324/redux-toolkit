import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartItems } from "../../CartItems";
const initialState = {
    cartItem: [],
    amount: 1,
    total: 0,
    isLoading: false
}
const url = `https://course-api.com/react-useReducer-cart-project`


export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
   return fetch(url)
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err)
    })
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state, action) =>{ state.cartItem = []},
        removeItem : (state, action) => {
            const itemID = action.payload
            state.cartItem = state.cartItem.filter((item) => itemID !== item.id)
        },
        increase: ( state, action ) => {
            const itemID = action.payload
            const cartItem = state.cartItem.find(item => itemID == item.id)
            cartItem.amount = cartItem.amount + 1
            
        },
        decrease: ( state, action ) => {
            const itemID = action.payload
            const cartItem = state.cartItem.find(item => itemID == item.id)
            cartItem.amount = cartItem.amount - 1
        },
        calculateTotal: (state, action) => {
            let amount = 0; 
            let total = 0
            state.cartItem.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total;
        },
    },
    ///////////
    extraReducers: {
        [getCartItems.pending]: state => {
            console.log(`Promises is pending - - - - -  -`)
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action) => {
            console.log(action)
            console.log(`Promises is fulfilled - - - - -  -`)
            state.isLoading = false
            state.cartItem = action.payload
        },
        [getCartItems.rejected]: (state, action) => {
            console.log(`Promises is rejected - - - - -  -`)
            state.isLoading = false
        },
        
    }
})
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions
export default cartSlice.reducer