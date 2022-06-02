import React from 'react';
import './Shop.css'

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, rattings } = product;

    return (
        <div className='product'>
            <div className='product-info'>
                <img className='product-image' src={img} alt="" />
                <h3>{name}</h3>
                <h3>Price: {price}</h3>
                <p>Seller:{seller}</p>
                <p>Rattings:{rattings}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='product-button'>Add to Cart <svg xmlns="http://www.w3.org/2000/svg" className='icon' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg> </button>

        </div>
    );
};

export default Product;

{/* */ }