import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from '../App';
import TriggerButton from './TriggerButton';

/**
 * Author: Joe Woods
 * This component is the layout for the dashboard when you are logged in
 */

export default function LoggedIn() {
    return (
        <>
            {/*Navbar component*/}
            <NavBar />
            {/*Wrapper and buttons for account nav*/}
            <div className="wrapper">
                <div className="buttonColumn">
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Trade Store</button>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Prior Trades</button>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Notifications</button>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Settings</button>
                </div>
                <div className="contentColumn">
                    <Link to="/additem">
                        <div className="addItem"><button className="btn btn-sm btn-danger center modal-button btnFormat3">Add item</button></div>
                    </Link>
                </div>
            </div>
        </>
    );
}