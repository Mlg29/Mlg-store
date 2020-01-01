import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Homepage from "../src/Pages/Hompage"
import ShopPage from "../src/Pages/Shop"
import Form from "../src/Pages/Form"
import { connect } from "react-redux"
import Navigation from "../src/Component/Navigation"
import { Switch, Route, Redirect } from "react-router-dom"
import { auth, createUserProfileDocument } from "../src/Firebase/firebase.utils"
import setCurrentUser from "../src/redux/userReducer/user-action"
import Checkout from "../src/Component/Checkout"
import { selectCurrentUser } from './redux/userReducer/user-selector';
import { createStructuredSelector } from "reselect"

class App extends Component {
  unSubscribeFromAuth = null
  
  componentDidMount() {
    const { setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      setCurrentUser(userAuth)
     
    })
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth()
  }
  render(){
    const { currentUser } = this.props
    return (
      
       <div>
         <Navigation />
         <Switch>
           <Route exact path="/" component={Homepage} />
           <Route path="/shop" component={ShopPage} />
           <Route path="/checkout" component={Checkout} />
           <Route exact path="/form" render={() => currentUser ? (<Redirect to="/" />) : (<Form />)} />
         </Switch>
       </div>
    
    )
  }

}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
