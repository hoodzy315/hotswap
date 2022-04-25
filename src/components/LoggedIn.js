import React from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import DisplayItems from "./DisplayItems";
import { AuthContext } from "../App";


/**
 * Author: Joe Woods
 * This component is the layout for the dashboard when you are logged in
 */

export default function LoggedIn() {
    const { state } = React.useContext(AuthContext);
    const config = {
        headers: {
            "Authorization": "Bearer " + state.token
        }
    }

    return (
        <>
            {/*Navbar component*/}
            <NavBar />
            {/*Wrapper and buttons for account nav*/}
            <div className="wrapper">
                <div className="buttonColumn">
                    <Link className ="btn btn-lg btn-danger center modal-button btnFormat2" to="/tradestore">Trade Store</Link> 
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Prior Trades</button>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Notifications</button>
                    <Link className ="btn btn-lg btn-danger center modal-button btnFormat2" to="/settings">Settings</Link> 
                </div>
                <div className="contentColumn">
                    <div className="addItem">
                        <Link className ="empty" to="/additem">
                            <button className="btn btn-sm btn-danger center modal-button btnFormat3">Add item</button>
                        </Link>
                    </div>
                    <DisplayItems config={config} userStore={state.userStore}/>
                </div>
            </div>
        </>
    );
}