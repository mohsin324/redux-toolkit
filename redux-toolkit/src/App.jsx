import React, { Fragment, useState } from "react";
// components
import CartContainer from './Components/CartContainer';
import Navbar from "./Components/Navbar";
const App = () => {
  return(
    <React.Fragment>
      <Navbar />
      {/* Cart Container */}
      <CartContainer />
    </React.Fragment>
  )
}

export default App;