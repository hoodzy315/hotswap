import React from "react";
import HotSwapLogo from '../images/hotswap.png';
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

/**
 * Author: Joe Woods
 * This component displays the navbar
 */

export default function NavBar() {
    //Get state so we can hide or display information based on login status
    const { state, dispatch } = React.useContext(AuthContext);
    return (
        <nav>
            <div className="HotSwapContainer">
                <Link to="/"><img alt="HotSwap" className="HotSwapLogo" src={HotSwapLogo} /></Link>
            </div>
            {/**Check to see if state is authenticated and display welcome message if so */}
            {state.isAuthenticated && (
                <div>
                    <h3 className="nav--dashboard">Dashboard</h3>
                    <h4 className="nav--welcome">Welcome, {state.user}</h4>
                </div>
            )}
            <h3 className="nav--about"><Link to="/about">About</Link></h3>
            <h3 className="nav--contact"><Link to="/contactus">Contact Us</Link></h3>
            {state.isAuthenticated && (
                <h3 className="nav--LogOut"><Link to="/" onClick={() =>
                    dispatch({
                        type: "LOGOUT"
                    })
                }>Log Out</Link></h3>
            )}
        </nav>
    )
}