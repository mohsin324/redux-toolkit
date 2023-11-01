import React from "react";
import { useSelector, useDispatch } from 'react-redux';
const TotalItem = () => {
    const {amount } = useSelector(state => state.cart);
    return (
        <div>
            <h1>Total Item selected amount: {amount}</h1>
        </div>
    )
}

export default TotalItem