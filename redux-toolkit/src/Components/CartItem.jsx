import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, increaseAmount, decreaseAmount } from '../Features/Cart/CartSlice'
const CartItem = ({title, price, amount, id}) => {
  const dispatch = useDispatch();
  if(amount === 0){
    return <h3>Your amount is 0</h3>
  }
  return (
    <div>
        <h3>Title: {title}</h3>
        <h3>Amount: {amount}</h3>
        <button onClick={()=> dispatch(increaseAmount(id))}>Increase Amount</button>
        <button onClick={()=>{
          if(amount === 1){
            dispatch(decreaseAmount(id));
            return;  
          }
          dispatch(decreaseAmount(id))
        }
           }>Decrease Amount</button>
        <h3>Price: {price}</h3>
        <button onClick={()=> dispatch(removeCart(id))}>Remove</button>
        <hr />
    </div>
  )
}

export default CartItem