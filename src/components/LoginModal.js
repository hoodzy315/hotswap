import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import LoginForm from "./LoginForm";

/**
 * Author: Joe Woods
 * This component is the modal for logging in, it uses react-bootstrap for the modal.
 */

const LoginModal = (props) => {
    return (
        <>
            <Modal className="loginModal" show={props.modalOpen} onHide={props.handleModalOpen}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body><LoginForm/></Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.handleModalOpen}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default LoginModal;