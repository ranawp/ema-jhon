import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    for (const product of cart) {
        total = total + product.price;

    }
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items: {cart.length}</p>
            <p>Total price: {total}</p>
            <p>Total shipping : </p>
            <p>Tax:</p>
            <p>Grand Total</p>

        </div>
    );
};

export default Cart;