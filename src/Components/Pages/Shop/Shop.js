import React, { useState } from 'react';
import Product from './Product';
import './Shop.css'
const Shop = () => {
    const [products, setproducts] = useState([]);
    fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    return (
        <div>
            <h3 className='shop-title'>Shop Now</h3>
            <div className='shop-container'>
                <div className="product-container">
                    <div className='single-product'>
                        {
                            products.map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>
                            )
                        }
                    </div>
                </div>
                <div className="order-container">
                    <h3>Orders</h3>
                </div>
            </div>
        </div>
    );
};

export default Shop;