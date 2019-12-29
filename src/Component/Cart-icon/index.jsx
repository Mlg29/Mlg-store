import React from "react"
import "./Cart-icon.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/11.3 shopping-bag.svg.svg"
import { connect } from "react-redux"
import toggleCartHidden from "../../redux/cartReducer/cartAction"
import { selectCartItemsCount } from "../../redux/cartReducer/cart.selector"
import { createStructuredSelector } from "reselect"


function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
        </div>
    )
}

 
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)