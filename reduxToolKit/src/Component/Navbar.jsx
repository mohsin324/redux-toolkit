import { useSelector } from "react-redux";
const Navbar = () => {
    const  { amount }  = useSelector((store) => store.cart); 
    return(
        <div>
            <h3>Total Amount: { amount } </h3>
        </div>
    )
}
export default Navbar;