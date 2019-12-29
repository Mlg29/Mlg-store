import CartActionType from "./cartActionType"

const clearItemFromCart = item => ({
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
})

export default clearItemFromCart