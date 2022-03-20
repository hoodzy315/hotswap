import React from "react";
import HotSwapLogo from '../images/hotswap.png';



export default function Navbar() {
    return (
    <nav>
        <img alt="HotSwap" className="HotSwapLogo" src={HotSwapLogo}/>
        <h3 className="nav--about">About</h3>
        <h4 className="nav--contact">Contact Us</h4>
    </nav>
    )
}