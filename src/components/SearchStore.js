import React from "react";
import { AuthContext } from '../App';
import { useState } from "react";
import axios from 'axios';
/**
 * Author: Joe Woods
 * Form for submitting a new item
 */

export default function SearchStore(sr, searched) {
    const { state } = React.useContext(AuthContext);
    const [category, setCategory] = useState(null);
    const [keyword, setKeyword] = useState(null);
    const [mval, setmval] = useState(null);

    const submitForm = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                "Authorization": "Bearer " + state.token
            }
        }


        axios.get("https://damp-fjord-26738.herokuapp.com/api/tradestore?k=" + keyword, config)
            .then (res => {
                sr = res.data.searchResults;
                searched = true;
                console.log(sr);
                console.log(searched);
            })
    
            



    };
    return (
        <div className="upload">
            <form className="uploadForm" onSubmit={submitForm}>
                <input
                    type="text"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder={"Search keywords"}
                />
                <br />
                <label className="uploadfrmt" htmlFor="condition">Condition</label>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option>
                        Toys
                    </option>
                    <option>
                        Collectibles
                    </option>
                    <option>
                        Furniture
                    </option>
                    <option>
                        Electronics
                    </option>
                </select>
                <br></br>
                <input className="uploadfrmt" type="submit" value="Search"/>
            </form>
            
        </div>
    );
}
