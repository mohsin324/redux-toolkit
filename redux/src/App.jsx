import  reducer  from './reducer';
import { Provider } from 'react-redux';
import React from 'react';
import { cartItem } from './Cart/CartItem';
import CartContainer from './CartContainer';
// reducer
import { createStore } from "redux";
// react-redux provider
// initial state
const initialState = {
  count: 789,
  name: 'Mohsin',
  cart: cartItem
  
}

// import redux
const store = createStore(reducer, initialState);
const App = () => {
  return(
    <Provider store={store}>
      <h1>Start Learning React Redux</h1>
      <CartContainer />
    </Provider>
  )
}
export default App;