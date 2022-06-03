import React, { useEffect, useState } from 'react';
import Cart from './Cart';
import Product from './Product';
import './Shop.css'
const Shop = () => {
    const [products, setproducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)

    }




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
                                handleAddToCart={handleAddToCart}


                            ></Product>
                            )
                        }
                    </div>
                </div>
                <div className="order-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;