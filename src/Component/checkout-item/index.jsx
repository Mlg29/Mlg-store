import React from "react"
import "./checkout-item.scss"
import { connect } from "react-redux"
import clearItemFromCart from "../../redux/cartReducer/cartClearAction"
import addItem from "../../redux/cartReducer/cartAddAction"
import removeItem from "../../redux/cartReducer/removeAction"


function CheckoutItem({cartItem, clearItem, addItem, removeItem}) {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"  />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => removeItem(cartItem)} className="arrow">&#10094;</div>
                    <span className="value">{quantity}</span>
                <div onClick={() => addItem(cartItem)} className="arrow">&#10095;</div>    
            </span>
                
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})
 
export default connect(null, mapDispatchToProps)(CheckoutItem)