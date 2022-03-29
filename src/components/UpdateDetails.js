import { useState } from "react";
import { AuthContext } from "../App";
import React from 'react';
import axios from 'axios';

/**
 * Author: Joe Woods
 * Form for submitting a new item
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

        let dataArray = JSON.stringify({
            username: newUsername
        })

        console.log(dataArray);
        console.log(state.userId);


        const config = {
            headers: {
                "Authorization": "Bearer " + state.token
            }
        }

        axios.patch("https://damp-fjord-26738.herokuapp.com/api/users/update/username/" + state.userId, dataArray, config)
            .then(res => {
                console.log(res.data);
            })

    };

    const updatePassword = (event) => {
        event.preventDefault();

        let dataArray = new FormData();
        dataArray.append('password', newPass);
        console.log(newPass);

        const config = {
            headers: {
                "Authorization": "Bearer " + state.token
            }
        }

        axios.patch("https://damp-fjord-26738.herokuapp.com/api/users/update/password/" + state.userId, dataArray, config)
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
                    placeholder={"New Username"}
                />
                <input className="uploadfrmt" type="submit" />
            </form>
            <br />
            <form className="" onSubmit={updatePassword}>
                <input
                    type="text"
                    onChange={(e) => setnewPass(e.target.value)}
                    placeholder={"New password"}
                />
                <input className="uploadfrmt" type="submit" />
            </form>
        </div>
    );
}