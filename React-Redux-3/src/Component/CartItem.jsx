import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../Features/Cart/CartSlice'
const CartItem = ({item}) => {
    console.log('item we got ', item)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Title: ${item.title}</h1>
            <h1>Price: ${item.price}</h1>
            <img src={item.img} width="50px" height="50px" alt="item images" />
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            <h1>Amount: ${item.amount}</h1>
            <button onClick={() => dispatch(increase(item.id))}>Increase Amount</button>
            <button onClick={() => {
                if(item.amount === 1){
                    dispatch(removeItem(item.id))
                    return
                }
                dispatch(decrease(item.id))
            }}>Decrease</button>
            <hr />

        </div>
    )
}
export default CartItem;