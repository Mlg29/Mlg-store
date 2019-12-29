import React from "react"
import "./Sign-Up.scss"
import FormInput from "../Form-input"
import CustomButton from "../Custom-button"
import { auth, createUserProfileDocument } from "../../Firebase/firebase.utils"

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
 
    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.error(error)
        }
        
    }
    render() {
        const { displayName, email, password, confirmPassword} = this.state
         return (
        <div className="sign-up">
            <h1 className="header">I do not have an account</h1>
            <span className="span">Sign up with your email and password</span>

            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                    type="text" 
                    name="displayName" 
                    value={displayName} 
                    handleChange={this.handleChange} 
                    label="Display Name"
                    required 
                />

                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={this.handleChange} 
                    label="Email"
                    required 
                />

                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={this.handleChange} 
                    label="Password"
                    required 
                />
                    <FormInput 
                    type="password" 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    handleChange={this.handleChange} 
                    label="Confirm Password"
                    required 
                />
                <div className="">
                   <CustomButton type="submit" >SIGN UP</CustomButton>
                </div>
                
            </form>
        </div>
    )
}
    }
   

export default SignUp