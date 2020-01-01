import React from "react"
import "./spinner.scss"

const Spinner = WrapperComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className="spinner-overlay">
            <div className="spinner-container">

            </div>
        </div>
    ) : (
        <WrapperComponent {...otherProps} />
    )
}

export default Spinner