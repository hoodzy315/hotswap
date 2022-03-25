import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Container from "./Container";
import Login from "./Login";

/**
 * Author: Joe Woods
 * This component handles the landing page layout
 */

const triggerText = "Sign Up";

class LandingPage extends React.Component {
    

    render() {
        return (
            <div>
                <Navbar/><Main /><div className="loginform"><Container triggerText={triggerText}/></div><Login />
            </div>
        )
    }
}

export default LandingPage;