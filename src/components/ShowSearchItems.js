import React from "react";
import Product from "./Product";

/**
 * Author: Joe Woods
 * This component is used to display all of the store items
 */

class ShowSearchItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
                this.setState({
                    isLoaded: this.props.searched,
                    items: this.props.sr,
                });
            }
    render() {
        var { isLoaded } = this.state;

        if (!isLoaded) {
            return <div></div>
        } else {
            return (
                <>
                <h1>Search Results</h1>
                <br/>
                <div className="storeGrid">
                    {
                        this.state.items.map(item => <Product 
                            key={item._id}
                            item={item.name}
                            img={item.image}
                            />)
                    }
                </div>
                </>
            )
        }
    }
}

export default ShowSearchItems;