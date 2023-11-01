import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import CartIem from "./CartItem";
import { clearCart } from "../Features/Cart/CartSlice";
import { isOpenModal } from "../Modal/ModalSlice";
const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItem, amount, total } = useSelector(store => store.cart)
    const { isOpen } = useSelector(store => store.Modal)
    const clearAll = () => {
        dispatch(clearCart())
    }
    if(amount < 1){
        return <div>
            <h1>Your cart is Empty</h1>
        </div>
    }
    return(
    <section>
        <header>
            <h2>Your Bag </h2>
        </header>
        <div>
            {
                cartItem.map(item => {
                    return(
                        <CartIem key={item.id} item={item} />
                    )
                })
            }
        </div>
        <footer>
            <hr />
            <h4>Total <span>${total}</span></h4>
            <button>Clear Cart </button>
            {/* <button onClick={clearAll}>Clear Cart Here</button> */}
            {/* <button onClick={() => dispatch(clearCart())}>Clear Now</button> */}
            <button onClick={() => dispatch(isOpenModal())}>Clear Now</button>

        </footer>
    </section>
    )
}
export default CartContainer