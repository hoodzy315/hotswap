import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Container from "./Container";
import Login from "./Login";

/**
 * Author: Joe Woods
 * This component handles the landing page layout
 */
//setup trigger button text
const triggerText = "Sign Up";

//All this component does is export a component with the nav, main, the trigger button and the login message
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