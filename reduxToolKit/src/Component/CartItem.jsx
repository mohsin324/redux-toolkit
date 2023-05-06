import React from 'react'
import { removeCartItem, amountIncrease, amountDecrease } from '../Features/Cart/CartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ id, name, price, amount }) => {
    const dispatch = useDispatch();
  return (
    <div>
        <h4>Product: {name}</h4>
        <h4>Price: ${price}</h4>
        <h4>Amount: ${amount}</h4>
        <button onClick={()=> dispatch(amountIncrease(id))}>Increase Amount</button>
        <button onClick={()=> {
          if(amount === 1){
            dispatch(removeCartItem(id));
            return
          }
          dispatch(amountDecrease(id))
        }
        
        }>Decrease Amount</button>

        <br />
        <br />
        <button onClick={()=> {dispatch(removeCartItem(id))}}>Remove</button>
        <hr />
        <br />
    </div>
  )
}

export default CartItem