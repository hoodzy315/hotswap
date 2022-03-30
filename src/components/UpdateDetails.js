import { useState } from "react";
import { AuthContext } from "../App";
import React from 'react';
import axios from 'axios';

/**
 * Author: Joe Woods
 * This component handles updating items on the users account
 */

export default function NewItemForm() {
    const { state } = React.useContext(AuthContext);
    const [newPass, setnewPass] = useState(null);
    const [newEmail, setNewEmail] = useState(null);
    const [newUsername, setnewUsername] = useState(null);
    const [newsal1, setnewsal1] = useState(null);
    const [newsal2, setnewsal2] = useState(null);
    const [newCity, setnewCity] = useState(null);
    const [newState, setnewState] = useState(null);
    const [newZip, setnewZip] = useState(null);

    const updateUser = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Bearer " + state.token
            }
        }

        axios.patch("https://damp-fjord-26738.herokuapp.com/api/users/update/username/" + state.userId, 'username=' + newUsername)
            .then(res => {
                console.log(res.data);
            })

    };

    const updatePassword = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                "Authorization": "Bearer " + state.token
            }
        }

        axios.patch("https://damp-fjord-26738.herokuapp.com/api/users/update/password/" + state.userId, 'password=' + newPass)
            .then(res => {
                console.log(res.data);
            })

    };

    const updateOthers = (event) => {
        event.preventDefault();
        let dataArray = new FormData();
        let data = {};

        const config = {
            headers: {
                "Authorization": "Bearer " + state.token
            }
        }

        console.log(newEmail);
        console.log(newsal2);

        if(newEmail != null){
            dataArray.append("email", newEmail);
        }

        if(newsal1 != null){
            dataArray.append("shippingAddressLine1", newsal1);
        }

        if(newsal2 != null){
            dataArray.append("shippingAddressLine2", newsal2);
        }

        if(newCity != null){
            dataArray.append("city", newCity);
        }

        if(newState != null){
            dataArray.append("state", newState);
        }

        if(newZip != null){
            dataArray.append("zip", newZip);
        }

        dataArray.forEach((value, key) => data[key] = value);

        console.log(data);

        axios.patch("https://damp-fjord-26738.herokuapp.com/api/users/update/address/" + state.userId, data)
            .then(res => {
                console.log(res.data);
            })

    };


    return (
        <div className="upload">
            <form className="" onSubmit={updateUser}>
                <input
                    type="text"
                    onChange={(e) => setnewUsername(e.target.value)}
                    placeholder={"Change Username"}
                />
                <input className="uploadfrmt" type="submit" />
            </form>
            <br />
            <form className="" onSubmit={updatePassword}>
                <input
                    type="text"
                    onChange={(e) => setnewPass(e.target.value)}
                    placeholder={"Change password"}
                />
                <input className="uploadfrmt" type="submit" />
            </form>
            <form className="" onSubmit={updateOthers}>
                <input
                    type="email"
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder={"Change Email"}
                />
                <input
                    type="text"
                    onChange={(e) => setnewsal1(e.target.value)}
                    placeholder={"Change shipping address line 1"}
                />
                <input
                    type="text"
                    onChange={(e) => setnewsal2(e.target.value)}
                    placeholder={"Change shipping address line 2"}
                />
                <input
                    type="text"
                    onChange={(e) => setnewCity(e.target.value)}
                    placeholder={"Change city"}
                />
                <input
                    type="text"
                    onChange={(e) => setnewState(e.target.value)}
                    placeholder={"Change state"}
                />
                <input
                    type="text"
                    onChange={(e) => setnewZip(e.target.value)}
                    placeholder={"Change zip"}
                />
                <input className="uploadfrmt" type="submit" />
            </form>
        </div>
    );
}