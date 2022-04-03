import { useState } from "react";
import { AuthContext } from "../App";
import React from 'react';
import axios from 'axios';

import { TRADEITEM_CATEGORIES, TRADEITEM_CONDITIONS } from '../constants/lists';

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
            <h3 className="dashboard-title">Add Item</h3>
            <form className="uploadForm" onSubmit={submitForm}>
                <label for="item_name">Item Name</label><br/>
                <input
                    type="text"
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder={"Enter Item Name"}
                    required
                    id="item_name"
                />
                <br />
                <label for="item_brand">Item Brand</label><br/>
                <input
                    type="text"
                    onChange={(e) => setItemBrand(e.target.value)}
                    placeholder={"Item Brand"}
                    required
                    id="item_brand"
                />
                <br />
                <label for="select-file">Add an Image</label><br/>
                <input required className="uploadfrmt" type="file" id="select-file" onChange={(e) => setFile(e.target.files)} />
                <br />
                <label for="description">Add Item's Description</label><br/>
                <input type="text" id="description" required placeholder={"Description"} onChange={(e) => setDescription(e.target.value)}></input>
                <br />
                <label for="market-val">Approximate Market Value ($)</label><br/>
                <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    id="market_val"
                    min="0"
                    max="10000"
                />
                <br />
                <label className="uploadfrmt" htmlFor="condition">Condition</label><br/>
                <select onChange={(e) => setCondition(e.target.value)}>
                    <option value="" disabled selected>Select Condition of Item</option>
                    {TRADEITEM_CONDITIONS.map(cond => 
                      <option key={cond}>
                        {cond}
                      </option>
                    )
                    
                    }
                </select>
                <br />
                <label className="uploadfrmt" htmlFor="condition">Category</label><br/>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled selected>Select a Category</option>
                    {TRADEITEM_CATEGORIES.map(cat => 
                      <option key={cat}>
                        {cat}
                      </option>
                    )}
                    <option>Other</option>
                </select>
                <br/>
                {/* <input
                    type="text"
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder={"Category"}
                /> */}
                <br></br>
                <input className="uploadfrmt" type="submit" />
            </form>
        </div>
    );
}
