import React from 'react';
const Product = (props) => {
    return(
            <div className="singleProduct">
            <p>Item: {props.item}</p>
            <img className="prodImg" src={props.img}></img>
            </div>
    )
}
export default Product;