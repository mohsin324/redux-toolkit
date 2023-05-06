import React, { useEffect } from "react";
import CartContainer from "./Component/CartContainer";
import Navbar from "./Component/Navbar";
// redux import
import { useSelector, useDispatch } from "react-redux";
import { totalAmount } from "./Features/Cart/CartSlice";
const App = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(totalAmount());
  }, [cartItems]);
  return(
    <div>
      <h1>Redux Tool Kit</h1>
      <Navbar />
      <CartContainer />
    </div>
  )
}
export default App; 