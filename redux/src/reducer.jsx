import { CLEAR_CART, DECREASE, GET_TOTALS, INCREASE, REMOVE, RESET_CART } from './Action';
// reducer
import { cartItem } from './Cart/CartItem';
const reducer = (state, action) => {
    //  debugger
    if(action.type === CLEAR_CART){
      return { ...state, cart: [] }
    }
    if(action.type === DECREASE){
        let newCart = [];
        if(action.payload.amount === 1){
            newCart = state.cart.filter((fresh) => {
                return fresh.id !== action.payload.id
            })
        }else{
            newCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    return { ...cartItem, amount: cartItem.amount - 1}
                }
                return cartItem
            })
        }
        return { ...state, cart: newCart }
    }
    if(action.type === INCREASE){
        let newCart = [];
        
            newCart = state.cart.map((cartItem) => {
                if(cartItem.id === action.payload.id){
                    return { ...cartItem, amount: cartItem.amount + 1}
                }
                return cartItem
            })
        
        return { ...state, cart: newCart }
    }
    if(action.type === REMOVE){
        return{ ...state, cart : state.cart.filter((fresh) => {
            return fresh.id !== action.payload.id
        })}
    }
    if(action.type === RESET_CART){
        return{ ...state, cart : cartItem }
    }
    // get totals amount
    if(action.type === GET_TOTALS){
        let { total, amount } = state.cart.reduce((cartTotal, currentItem)=> {
            const { amount } = currentItem
            cartTotal.amount += amount;
            console.log(amount+' amount')
            return cartTotal
        }, {
            total: 0,
            amount: 0
        })
        return { ...state, total, amount }
    }
    return state
    
  }
  export default reducer;