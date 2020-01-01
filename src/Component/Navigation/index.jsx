import React from "react"
import "./Navigation.scss"
import { Navbar, Nav,} from "react-bootstrap"
import { auth } from "../../Firebase/firebase.utils"
import { connect } from "react-redux"
import CartIcon from "../Cart-icon"
import CartDropdown from "../Cart-dropdown"
import { createStructuredSelector } from "reselect"
import { selectCartHidden } from "../../redux/cartReducer/cart.selector"
import { selectCurrentUser } from "../../redux/userReducer/user-selector"

function Navigation({currentUser, hidden}) {
    return (
      <div className="container-fluid">
          <Navbar bg="transparent" expand="lg" className="nav-bg nav-back">
            <Navbar.Brand href="/"><h1 className="logo-header">MLG Store</h1></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="/" className="home-menu">HOME</Nav.Link>
                    <Nav.Link href="/shop" className="other-menu">SHOP</Nav.Link>
                      <Nav.Link href="/contact" className="other-menu">CONTACT</Nav.Link>
                      {
                        currentUser ? 
                          <div style={{color: "grey", fontWeight: "bold", marginLeft: "1rem", marginTop: "8px"}} onClick={() => auth.signOut()}>SIGN OUT</div>
                          : <Nav.Link href="/form"  style={{color: "grey", fontWeight: "bold", marginLeft: "1rem"}}>SIGN IN</Nav.Link>
                      }
                      
                      <CartIcon />               
                    </Nav>

                    {
                      hidden ? null : <CartDropdown />
                    }            
            </Navbar.Collapse>
      </Navbar>
    </div>    
    )
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})
export default connect(mapStateToProps)(Navigation)