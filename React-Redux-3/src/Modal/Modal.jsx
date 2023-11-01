import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import '../App.css';
import {clearCart} from '../Features/Cart/CartSlice';
import { isCloseModal } from "./ModalSlice";
const Modal = () => {
    const dispatch = useDispatch()
    const { isOpen } = useSelector(state => state.Modal);
    const { amount } = useSelector(state => state.cart);
    // useEffect(()=> {
    //     console.log(`is open in Modal in useEffect: ${isOpen}`)
    //     if(isOpen){
    //         // document.body.style.pointerEvents = 'none'
    //        document.body.style.overflowY = "hidden"
    //     }
    //     document.body.style.overflowY = "none"
    // },[isOpen])
    return (
        <div>
            <div className="modal-wrapper"></div>
            <div className="modal-container">
            <h1>Hello Modal</h1>
            <button style={{background:'blue', border: '10px', color:'white', padding:'10px'}} onClick={() => dispatch(isCloseModal())}>Cancel</button>
            <button style={{background:'red', border: '10px', color:'white', padding:'10px'}} onClick={() => {dispatch(clearCart()); dispatch(isCloseModal())}}>Wants to clear cart</button>
            </div>
        </div>
    )
}
export default Modal