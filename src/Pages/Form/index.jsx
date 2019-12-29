import React from "react"
import "./form.scss"
import SignIn from "../../Component/Sign-in"
import SignUp from "../../Component/Sign-up"

function Form() {
    return (
        <div className="form">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Form