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
            <form className="d-flex justify-content-between mb-3" onSubmit={updateUser}>
                <div className="w-100 form-group padding-right-custom">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Update username" onChange={(e) => setnewUsername(e.target.value)} />
                </div>
                <div className="form-group width-custom">
                    <label className="visibility-hidden">Button</label>
                    <input className="form-control m-0 btn btn-danger btnFormat4" type="submit" />
                </div>
            </form>
            <form className="d-flex justify-content-between mb-3" onSubmit={updatePassword}>
                <div className="w-100 form-group padding-right-custom">
                    <label htmlFor="password">Password</label>
                    <input type="text" className="form-control" id="password" placeholder="Update password" onChange={(e) => setnewPass(e.target.value)} />
                </div>
                <div className="form-group width-custom">
                    <label className="visibility-hidden">Button</label>
                    <input className="form-control m-0 btn btn-danger btnFormat4" type="submit" />
                </div>
            </form>
            <form className="" onSubmit={updateOthers}>
                <div className="form-group">
                    <label htmlFor="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Update email" onChange={(e) => setNewEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Update shipping address line 1" onChange={(e) => setnewsal1(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2"
                           placeholder="Update shipping address line 2" onChange={(e) => setnewsal2(e.target.value)} />
                </div>
                <div className="form-row d-flex">
                    <div className="form-group col-md-6 pr-2">
                        <label htmlFor="inputCity">City</label>
                        <input placeholder="Update city" type="text" className="form-control" id="inputCity" onChange={(e) => setnewCity(e.target.value)} />
                    </div>
                    <div className="form-group col-md-4 px-2">
                        <label htmlFor="inputState">State</label>
                        <input placeholder="Update state" type="text" className="form-control" id="inputState" onChange={(e) => setnewState(e.target.value)} />
                    </div>
                    <div className="form-group col-md-2 pl-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" placeholder="Update zip" className="form-control" id="inputZip" onChange={(e) => setnewZip(e.target.value)} />
                    </div>
                </div>

                <div className="form-row d-flex justify-content-center">
                    <input className="btn btn-danger btnFormat4" type="submit" />
                </div>
            </form>
        </div>
    );
}