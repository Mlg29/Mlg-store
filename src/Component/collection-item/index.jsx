import React from "react"
import "./collection-item.scss"
import CustomButton from "../Custom-button"
import { connect } from "react-redux"
import addItem from "../../redux/cartReducer/cartAddAction"

function CollectionItem({item, addItem}) {
    const { name, price, imageUrl, width } = item
    return (
        <div className="collection-item">
            <div 
                className="image"
                style={{
                    width: {width},
                    background: `url(${imageUrl})`
                }}
             
             />
                <div className="collection-footer">
                    <span className="name">{name}</span>
                    <span className="price">{price}</span>
                </div>
                <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
               
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)