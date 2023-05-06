import React,{ useState } from "react";
import { clearCart } from "../Features/Cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
const CartContainer = () => {
    const dispatch = useDispatch();
    const { cartItems, amount, total } = useSelector((store) => store.cart);
    if(amount < 1){
        return(
            <section>
                <header>
                    <h2>your bag</h2>
                    <h4>is currently empty</h4>
                </header>
            </section>
        )
    }
    return (
        <div>
            <div>
                {
                    cartItems.map((cart) => {
                        return(
                            <CartItem key={cart.id} {...cart}/>
                        )
                    })
                }
            </div>
        <footer>
            <hr />
            <div>
                <h4>Total: ${total}</h4>
            </div>
            <button onClick={()=> dispatch(clearCart())}>Clear Cart</button>
        </footer>
        </div>
    )
}
export default CartContainer;