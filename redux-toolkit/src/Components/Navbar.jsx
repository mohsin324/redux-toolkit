import React from 'react';
// useSelector Hook
import { useSelector } from 'react-redux';
const Navbar = () => {
    const { amount, cartItems } = useSelector(state => state.cart);
    const filterAmount = cartItems.map((amount) => {
      return amount.amount 
    });
    const subTotal = filterAmount.reduce((acc, amount) => {
        console.log(amount+` amount at index ${acc}`)
        return acc += amount
      },0)
      //  filterAmount.reduce((acc, item) => (acc += item), 0)
    console.log(subTotal+' subTotal')
    console.log(JSON.stringify(filterAmount)+' filte') 
  return (
    <div>
        <h3>Redux Tool Kit</h3>
        <div>
            {/* <CartIcon /> */}
            <div>
                <p>Amount: {amount}</p>
                <p>Sub Total: {subTotal}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar