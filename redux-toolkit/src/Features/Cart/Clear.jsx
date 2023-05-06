export const clearAllCart = (state) => {
    console.log(JSON.stringify(state)+' state in clear');
    state.cartItems = []
}

// remove item
export const removeItem = (state, action) => {
    debugger
    console.log(action)
    const id = action.payload;
    state.cartItems = state.cartItems.filter((item) => item.id !== id);

}

export const increaseAmounts = (state, action) => {
    const id = action.payload;
    const cartItem = state.cartItems.find((item) => item.id === id);
    console.log(cartItem, 'amount')
    cartItem.amount = cartItem.amount + 1

}

export const decreaseAmounts = (state, action) => {
    const id = action.payload;
    const cartItem = state.cartItems.find((item) => item.id === id);
    console.log(cartItem, 'amount')
    cartItem.amount = cartItem.amount - 1

}

export const calculateTotal = (state, action) => {
    console.log(state+ ' calculate total')

}



// (state) => {
//     const newState = state.cartItems.filter( item => id !== item.id );
//     return newState
// }