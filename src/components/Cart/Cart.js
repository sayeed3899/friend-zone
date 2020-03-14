import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const totalPrice = cart.reduce((total, product) => total+ product.price, 0);
    const total = cart.reduce((total, product) => total + product.price ,0)
   
    return (
        <div>
            <h4>Order Sumarry</h4>
            <p>Item Orderd:{cart.length} </p>
            <p>Total Price:{total}</p>
        </div>
    );
};

export default Cart;