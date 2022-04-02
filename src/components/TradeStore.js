import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import ShowSearchItems from "./ShowSearchItems";
import { AuthContext } from "../App";
import React from "react";

/**
 * Author: Joe Woods
 * This component is the layout for adding an item
 */

export default function TradeStore() {
    let sr = null;
    const { state } = React.useContext(AuthContext);

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
                    <ShowSearchItems app={state}/>
                </div>
            </div>
        </>
    );
}