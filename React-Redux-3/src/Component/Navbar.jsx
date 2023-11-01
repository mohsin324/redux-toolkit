import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import TotalItem from "./TotalItem";
const Navbar = () => {
    // console.log(' outside store - - - >  ',useSelector((store) => console.log('inside store:  ',store.cart)))
    const { amount } = useSelector(store => store.cart);


    return(
        <nav>
            <div className="nav-center">
                <h3>React Redux ToolKit</h3>
                <h3>Total Item : </h3>
                <TotalItem />
                <div className="nav-container">
                    <div className="amount-container">
                        <p className="total-amount">$ {amount} </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar