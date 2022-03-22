import React from "react";
import HotSwapLogo from '../images/hotswap.png';
import { Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function NavBar() {
    const { state, dispatch } = React.useContext(AuthContext);
    return (
        <nav>
            <div className="HotSwapContainer">
                <Link to="/"><img alt="HotSwap" className="HotSwapLogo" src={HotSwapLogo} /></Link>
            </div>
            {state.isAuthenticated && (
                <div>
                    <h3 className="nav--dashboard">Dashboard</h3>
                    <h4 className="nav--welcome">Welcome, {state.user.firstName}</h4>
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