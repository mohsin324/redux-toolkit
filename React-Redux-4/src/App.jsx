import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "./Feature/Cart/CartSlice";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(getItems())
  }, [])
  return(
    <div>
      <h1>React Redux 4</h1>
    </div>
  )
}
export default App