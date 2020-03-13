import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={props.product.img} alt="" />
            </div>
            <div className="product-name">
                <h4>{props.product.name}</h4>
                <br />
                <p><small>by:{seller}</small></p>
                <br />
                <p>${price}</p>
                <br />
                <p><small> Only {stock} available</small></p>
            </div>

        </div>
    );
};

export default Product;