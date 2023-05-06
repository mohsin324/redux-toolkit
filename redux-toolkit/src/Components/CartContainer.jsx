import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Features/Cart/CartSlice';
import CartItem from './CartItem'
const CartContainer = () => {
    const dispatch = useDispatch();
    const { amount, cartItems, total } = useSelector((state) => state.cart );
    if(amount < 1){
        return (
            <section>
                <header>
                    <h2>Your Bag</h2>
                    <h4>Currently Empty</h4>
                </header>
            </section>
        )
    }

  return (
    <section>
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {
                cartItems.map((item) => {
                    console.log(item)
                    return(
                        <CartItem key={item.id} {...item} /> 
                    )
                })
            }
        </div>
        <footer>
            <hr />
            <div>
                <h4>Total: <span>{total}</span></h4>
            </div>
            <button onClick={()=> dispatch(clearCart())}>Clear Cart</button>
        </footer>
    </section>
  )
}

export default CartContainer