import axios from "axios";
import React from "react";
import Product from "./Product";

/**
 * Author: Joe Woods
 * This component is used to display all of the store items
 */

class DisplayItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        axios.get("https://damp-fjord-26738.herokuapp.com/api/userstore/trades/" + this.props.userStore, this.props.config)
            .then (res => {
                this.setState({
                    isLoaded: true,
                    items: res.data.itemsForTrade,
                });
            })

            
    }
    render() {
        var { isLoaded } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <>
                <h1>Store</h1>
                <br/>
                <div className="storeGrid">
                    {   
                        this.state.items.map(item => <Product 
                            key={item._id}
                            item={item.name}
                            img={`https://damp-fjord-26738.herokuapp.com/api/userstore/images/${item.image}`}
                            />)
                    }
                </div>
                </>
            )
        }
    }
}

export default DisplayItems;