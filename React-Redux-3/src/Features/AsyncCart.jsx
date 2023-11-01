import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const url = `https://course-api.com/react-useReducer-cart-project`
const initialState = {
    cartItem: [],
    isLoading: false,
    amount: 1, 
    total: 1
}

export const asyncGetCartItems = createAsyncThunk('asyncCartItem/asyncGetCartItems', () => {
    return fetch(url).then(res => res.json()).catch(err => console.log(err))
})
const asyncCartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers:{
        [asyncGetCartItems.pending]: state => {
            console.log(`Promises is pending in async- - - - -  -`)
            state.isLoading = true
        },
        [asyncGetCartItems.fulfilled]: (state, action) => {console.log(action.payload)
            console.log(`Promises is fulfilled in async - - - - -  -`)
        },
        [asyncGetCartItems.rejected]: (state, action) => {
            console.log(`Promises is rejected in async- - - - -  -`)
            state.isLoading = false
        }


    }

})

export default asyncCartSlice.reducer
// export const { getCartItems } = asyncCartSlice.actions