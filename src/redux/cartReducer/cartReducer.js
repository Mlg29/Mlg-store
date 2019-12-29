import CartActionType from "./cartActionType"
import addToCart from "./cart-utils"
import removeItemFromCart from "./cart-utils-remove"



const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionType.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionType.ADD_ITEM: 
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            }
        case CartActionType.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionType.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}


export default CartReducer
