import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Hooks/fakedb';
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

    useEffect(() => {
        const storedCart = getStoredCart();
        // console.log('storedCart',storedCart)
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }


        setCart(newCart)
        addToDb(selectedProduct.id)

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