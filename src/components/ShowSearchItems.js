import React from "react";
import Product from "./Product";
import axios from 'axios';
import { AuthContext } from '../App';
import { Link } from 'react-router-dom';

/**
 * Author: Joe Woods
 * This component is used to display searched items
 * auth token prop must be passed in
 */

class ShowSearchItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            keyword: "",
            category: "",
        };
    }

    submitForm = (event) => {
        event.preventDefault();

        const config = {
            headers: {
                "Authorization": "Bearer " + this.props.token
            }
        }


        axios.get("https://damp-fjord-26738.herokuapp.com/api/tradestore?k=" + this.state.keyword, config)
            .then(res => {
                this.setState({
                    isLoaded: true,
                    items: res.data.searchResults,
                });
            })
    }

    setKeyword = (e) => {
        this.state.keyword = e;
    }

    setCategory = (e) => {
        this.state.category = e;
    }

    render() {
        var { isLoaded } = this.state;
        if (!isLoaded) {
            return (
                <div className="upload">
                    <form className="uploadForm" onSubmit={this.submitForm}>
                        <input
                            type="text"
                            onChange={(e) => this.setKeyword(e.target.value)}
                            placeholder={"Search keywords"}
                        />
                        <br />
                        <label className="uploadfrmt" htmlFor="condition">Condition</label>
                        <select onChange={(e) => this.setCategory(e.target.value)}>
                            <option>
                                Any
                            </option>
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
                        <input className="uploadfrmt" type="submit" value="Search" />
                    </form>
                </div>
            );
        } else {
            return (
                <>
                    <div className="upload">
                        <form className="uploadForm" onSubmit={this.submitForm}>
                            <input
                                type="text"
                                onChange={(e) => this.setKeyword(e.target.value)}
                                placeholder={"Search keywords"}
                            />
                            <br />
                            <label className="uploadfrmt" htmlFor="condition">Condition</label>
                            <select onChange={(e) => this.setCategory(e.target.value)}>
                                <option>
                                    Any
                                </option>
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
                            <input className="uploadfrmt" type="submit" value="Search" />
                        </form>
                    </div>
                    <h1>Search Results</h1>
                    <br />
                    <div className="storeGrid">
                        {
                            this.state.items.map(item => 
                            <Link to={'/make-trade-offer'}
                              state={item}
                              key={item._id}
                            >
                              <Product
                                key={item._id}
                                item={item.name}
                                img={`https://damp-fjord-26738.herokuapp.com/api/userstore/images/${item.image}`}
                              />
                            </Link>)
                        }
                    </div>
                </>
            )
        }
    }
}

export default ShowSearchItems;