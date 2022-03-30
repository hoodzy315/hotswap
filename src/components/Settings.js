import React, { useState } from "react";
import NavBar from "./Navbar";
import UpdateDetails from "./UpdateDetails";

/**
 * Author: Joe Woods
 * This component is the layout for updating user account settings
 */

export default function Settings() {
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
                    <UpdateDetails/>
                </div>
            </div>
        </>
    );
}