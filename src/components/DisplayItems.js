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