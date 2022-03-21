import React from "react";
import HotSwapLogo from '../images/hotswap.png';
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <nav>
        <Link to="/"><img alt="HotSwap" className="HotSwapLogo" src={HotSwapLogo}/></Link>
        <h3 className="nav--about"><Link to="/about">About</Link></h3>
        <h3 className="nav--contact"><Link to="/contactus">Contact Us</Link></h3>
    </nav>
    )
}