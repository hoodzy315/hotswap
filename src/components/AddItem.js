import React, { useState } from "react";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
import axios from 'axios';


/**
 * Author: Joe Woods
 * This component is the layout for adding an item
 */

export default function LoggedIn() {
    const [image, setImage] = useState(null);

    const handleClick = () => {
        axios.post('https://post.imageshack.us/upload_api.php', process.env.REACT_APP_CLIENTID, image)
            .then(res => {
                console.log('Axios response: ', res)
            })
    }

    const handleFileInput = (e) => {
        console.log('file working');
        console.log(e.target.files[0]);
        const formData = new FormData();
        formData.append('imgfile', e.target.files[0], e.target.files[0].name);
        setImage(formData);
    }
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
                    <button onClick={handleClick}>Upload!</button>
                    <input type="file" onChange={handleFileInput} />
                </div>
            </div>
        </>
    );
}