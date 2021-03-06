import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    console.log(fakeData)
    const frist10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(frist10);

    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) =>{
        console.log('add product',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className = "product-container">
                
                    {
                        products.map(product => <Product handleAddProduct = {handleAddProduct} product = {product}></Product>)
                    }
                

            </div>
            <div className="cart-container">
                    <Cart  cart = {cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;