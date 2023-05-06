import React, { useEffect } from 'react'
import { CLEAR_CART, RESET_CART, GET_TOTALS } from './Action';
// import connect
import { connect } from 'react-redux'
import Cart from './Cart';
const CartContainer = ({cart, count, dispatch}) => {
    useEffect(() => {
        dispatch({ type: GET_TOTALS });
    })
    if(cart.length === 0){
        return(
            <div>
                <h3>Your Bag</h3>
                <h3>Currently Your Cart is Empty</h3>
                <button type='button' onClick={() => dispatch({ type: RESET_CART})}>Reset Cart</button>
            </div>
        )
    }
    // console.log(cart.length+' cart length')
  return (
    <div>
        {
            cart.map((index)=> {
                return <Cart key={index.id} {...index} />
            })
        }
        <h1>Count: {count}</h1>
        <button type='button' onClick={() => dispatch({ type: CLEAR_CART})}>Clear Cart</button>
        <button type='button' onClick={() => dispatch({ type: RESET_CART})}>Reset Cart</button>
    </div>
  )
}
const connectToProps = (store) => {
    // debugger;
    const { cart, count } = store;
    return { cart, count }
}
export default connect(connectToProps)(CartContainer);