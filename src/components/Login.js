import React from "react";
import LoginModal from "./LoginModal";

class Login extends React.Component {
    state = {
        modalOpen: false
    }

    handleModalOpen = () => {
        this.setState((prevState) => {
            return {
                modalOpen: !prevState.modalOpen
            }
        })
    }

    render() {
        return (
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