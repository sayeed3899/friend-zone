import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const first15 = fakeData.slice(0,15);
    const [products, setProducts] = useState(first15);
    

    return (
        <div className="shop-container">
            <div className ="product-container">
                {
                        products.map(product => <Product product = {product}></Product>)
                }
            </div>
            <div className="cart-container">
                    <h3>This is card</h3>
            </div> 
        </div>
    );
};

export default Shop;