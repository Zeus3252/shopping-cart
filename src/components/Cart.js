import React, { useState, useEffect } from 'react'
import App from '../App';

function CartRender () {
    const [cartDisplay, setCartDisplay] = useState([]);

    const addToCart = (product) => {
        setCartDisplay([...cartDisplay, product]);
    };

    return (
        <div>
            <App />
        </div>
    );



}

export default CartRender;