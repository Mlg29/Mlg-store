import { createSelector } from 'reselect'


export const selectCart = state => state.cart

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden

)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accummulatedQuantity, cartItem) => accummulatedQuantity + cartItem.quantity * cartItem.price, 0)
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accummulatedQuantity, cartItem) => accummulatedQuantity + cartItem.quantity, 0)
)