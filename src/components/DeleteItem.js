import NavBar from "./Navbar";
import DeleteItemForm from "./deleteItemForm";
import { Link } from "react-router-dom";
import DisplayItems from "./DisplayItems";
import React from "react";
import { AuthContext } from "../App";

export default function DeleteItem() {

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
                    <Link className="btn btn-lg btn-danger center modal-button btnFormat2" to="/tradestore">Trade Store</Link>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Prior Trades</button>
                    <button className="btn btn-lg btn-danger center modal-button btnFormat2" type="button">Notifications</button>
                    <Link className="btn btn-lg btn-danger center modal-button btnFormat2" to="/settings">Settings</Link>
                </div>
                <div className="contentColumn">

                    <DeleteItemForm config={config} userStore={state.userStore} />
                    <DisplayItems config={config} userStore={state.userStore} />
                </div>

            </div>

        </>
    );
}