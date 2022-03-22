import React from "react";
import NavBar from "./Navbar";
import { AuthContext } from '../App';
import TriggerButton from './TriggerButton';

export default function LoggedIn() {
    return (
        <>
            <NavBar />
            <div className="wrapper">
                <div className="buttonColumn">
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Trade Store</button>
                    <button type="button">Prior Trades</button>
                </div>
            </div>
        </>
    );
}