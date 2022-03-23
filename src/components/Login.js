import React from "react";
import LoginModal from "./LoginModal";
/**
 * Author: Joe Woods
 * This component handles the login modal of the non-authenticated landing page
 */

class Login extends React.Component {
    //Initial state setup
    state = {
        modalOpen: false
    }

    //Function to handle opening the modal
    handleModalOpen = () => {
        this.setState((prevState) => {
            return {
                modalOpen: !prevState.modalOpen
            }
        })
    }

    render() {
        return (
            //Display prompt to login and call login modal component to handle logging in
            <h1 className="login--landing">
                Already have an account? <a onClick={this.handleModalOpen} className="link">Click here to login!</a>
                <LoginModal
                    modalOpen={this.state.modalOpen}
                    handleModalOpen={this.handleModalOpen}
                />
            </h1>
        );
    }
}

    export default Login;