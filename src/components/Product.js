import React from 'react';
/**
 * Author: Joe Woods
 * This component sets up to display a single product
 */

const Product = (props) => {
    return(
            <div className="singleProduct">
            <p>Item: {props.item}</p>
            <img className="prodImg" src={props.img}></img>
            </div>
    )
}
export default Product;