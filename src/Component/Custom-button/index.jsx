import React from "react"
import "./Custom-button.scss"



function CustomButton({children,isGoogleSignIn,inverted, ...otherProps}) {
    return (
        <button className={`${inverted ? 'inverted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton