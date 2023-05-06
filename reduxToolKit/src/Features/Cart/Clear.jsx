// clear cart
export const clear = (state, action) => {
    state.cartItems = [];
}
// remove any item from cart
export const remove = (state, action) => {
    const id = action.payload;
    state.cartItems = state.cartItems.filter((item) => item.id !== id);
}
// increase amount
export const increaseAmount = (state, action) => {
    const id = action.payload;
    const findItem = state.cartItems.find((item) => item.id === id);
    findItem.amount = findItem.amount + 1
}
// decrease amount
export const decreaseAmount = (state, action) => {
    const id = action.payload;
    const findItem = state.cartItems.find((item) => item.id === id);
    findItem.amount = findItem.amount - 1
}
// calculate total amount
export const calculateTotalAmounts = (state, action) => {
    // amount
    const amount = state.cartItems.map((item) => item.amount);
    let total = amount.reduce((acc, item) => (acc += item),0);
    // price
    // let amount = 0;
    // let total = 0;
    // state.cartItems.forEach((item) => {
    //     amount += item.amount;
    // });
    state.amount = total
}