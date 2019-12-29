import React from "react"
import "./cart-dropdown.scss"
import CustomButton from "../Custom-button"
import CartItem from "../CartItem"
import {connect} from "react-redux"
import { withRouter } from "react-router-dom"
import { selectCartItems } from "../../redux/cartReducer/cart.selector"
import { createStructuredSelector } from "reselect"
import  toggleCartHidden  from "../../redux/cartReducer/cartAction"

function CartDropdown({ cartItems, history, dispatch }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
                    ) : ( <span className="empty-message">Your cart is empty</span>)
                }
                <CustomButton onClick={() => {
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                    }}>Go To Checkout</CustomButton>
            </div>

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown))

