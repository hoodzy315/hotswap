import React from "react";
import axios from "axios";
import Product from "./Product";
import { useState, useEffect } from "react";
import { render } from "@testing-library/react";

class DisplayItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    isLoaded: true,
                    items: data,
                });
            });
    }
    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            console.log(items);
            return (
                <>
                <h1>Store</h1>
                <br/>
                <div className="storeGrid">
                    {
                        this.state.items.map(item => <Product 
                            key={item.id}
                            item={item.title}
                            img={item.image}
                            />)
                    }
                </div>
                </>
            )
        }
    }
}

export default DisplayItems;