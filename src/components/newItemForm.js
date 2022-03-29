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
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState(null);
    const [itemName, setItemName] = useState(null);
    const [itemBrand, setItemBrand] = useState(null);
    const [price, setPrice] = useState(null);
    const [condition, setCondition] = useState(null);
    const [category, setCategory] = useState(null);

    const submitForm = (event) => {
        event.preventDefault();

        let dataArray = new FormData();
        dataArray.append('name', itemName);
        dataArray.append('brand', itemBrand);
        dataArray.append('image', file[0]);
        dataArray.append('condition', condition);
        dataArray.append('itemCategory', category);
        dataArray.append('description', description);
        dataArray.append('approximateMarketVal', price);
        console.log(dataArray);

        for (var [key, value] of dataArray.entries()) { 
            console.log(key, value);
        }

        const config = {
            headers: {
                "Authorization": "Bearer " + state.token
            }
        }


        axios.post("https://damp-fjord-26738.herokuapp.com/api/userstore/trades/" + state.userStore, dataArray, config)
            .then (res => {
                console.log(res.data);
            })

    };
    return (
        <div className="upload">
            <form className="uploadForm" onSubmit={submitForm}>
                <input
                    type="text"
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder={"Item Name"}
                />
                <br />
                <input
                    type="text"
                    onChange={(e) => setItemBrand(e.target.value)}
                    placeholder={"Item Brand"}
                />
                <br />
                <input className="uploadfrmt" type="file" onChange={(e) => setFile(e.target.files)} />
                <br />
                <input type="text" placeholder={"Description"} onChange={(e) => setDescription(e.target.value)}></input>
                <br />
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder={"value"}
                />
                <br />
                <label className="uploadfrmt" htmlFor="condition">Condition</label>
                <select onChange={(e) => setCondition(e.target.value)}>
                    <option>
                        New (still in packaging)
                    </option>
                    <option>
                        Like New
                    </option>
                    <option>
                        Used
                    </option>
                    <option>
                        Poor
                    </option>
                </select>
                <br />
                <input
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder={"Category"}
                />
                <br></br>
                <input className="uploadfrmt" type="submit" />
            </form>
        </div>
    );
}
