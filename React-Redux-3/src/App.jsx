import React, { useEffect } from "react";
import Navbar from "./Component/Navbar";
import CartContainer from './Component/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal, getCartItems } from "./Features/Cart/CartSlice";
import { isOpenModal } from "./Modal/ModalSlice";
import Modal from "./Modal/Modal";

import { asyncGetCartItems } from "./Features/AsyncCart";
// import { getCartItems } from "./Features/AsyncCart";


const App = () => {
  const { cartItem, isLoading } = useSelector(state => state.cart);
  const { isOpen } = useSelector(state => state.Modal)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItem])

  useEffect(() => {
    isOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll"
  }, [isOpen])

  // useEffect(() => {
  //   // console.log(getCartItems(), ' get cart item inside use effect')
  //   dispatch(getCartItems())
  // },[])

  useEffect(() => {
    dispatch(asyncGetCartItems())
  })

  if(isLoading){
    return <div><h1>.....Loadingggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg</h1></div>
  }
  return (
    <main>
      {/* <Modal /> */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App;