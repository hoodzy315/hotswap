import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import DisplayItems from "./DisplayItems";


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
                    <div className="addItem">
                        <Link to="/additem">
                            <button className="btn btn-sm btn-danger center modal-button btnFormat3">Add item</button>
                        </Link>
                    </div>
                    <DisplayItems/>
                </div>
            </div>
        </>
    );
}