import React from "react"
import "./Sign-in.scss"
import FormInput from "../Form-input"
import CustomButton from "../Custom-button"
import { signInWithGoogle } from "../../Firebase/firebase.utils"

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    handleSubmit(event) {
        event.preventDefault()

        this.setState({email: '', password: ''})
    }
    render() {
         return (
        <div className="sign-in">
            <h1 className="header">I already have an account</h1>
            <span className="span">Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="Email"
                    required 
                />

                <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label="Password"
                    required 
                />
                <div className="button">
                   <CustomButton type="submit" >SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google SignIn</CustomButton> 
                </div>
                
            </form>
        </div>
    )
}
    }
   

export default SignIn