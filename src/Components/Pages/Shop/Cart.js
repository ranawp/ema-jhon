import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart);
    let total = 0;
    let shippingPrice = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shippingPrice = shippingPrice + product.shipping;
    }
    const tax = (total * 10 / 100).toFixed(2);
    const grandTotal = (total + shippingPrice + Number(tax))

    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items: {quantity}</p>
            <p>Total price:{total} </p>
            <p>Total shipping :{shippingPrice} </p>
            <p>Tax:{tax}</p>
            <p>Grand Total:{grandTotal}</p>

        </div>
    );
};

export default Cart;