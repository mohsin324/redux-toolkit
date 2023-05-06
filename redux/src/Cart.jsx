import React from 'react';
import { connect } from 'react-redux';
import { DECREASE, INCREASE, REMOVE } from './Action';

const Cart = ({
  productName,
  brand,
  price,
  remove,
  increase,
  decrease,
  amount
}) => {
  return (
    <div>
        <h1>Product Name: {productName}</h1>
        <h3>Brand: {brand}</h3>
        <h3>
          Price: {price} 
          <span><button type='button' onClick={()=> increase()}>Increase Price</button></span>
          {amount} 
          <span><button type='button' onClick={()=> decrease()}>Decrease Price</button></span>
        </h3>
        <button onClick={() => remove()}>Remove Item</button>
        <hr />
    </div>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log(ownProps,' own prosp');
    const { id, amount } = ownProps;
    return{ 
      remove: ()=> dispatch({ type: REMOVE, payload: { id }}),
      increase: ()=> dispatch({ type: INCREASE, payload: { id }}),
      decrease: ()=> dispatch({ type: DECREASE, payload: { id, amount }}),

    }

}
export default connect(null, mapDispatchToProps) (Cart);