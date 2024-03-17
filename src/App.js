import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDisplay from './components/Product';
import CartRender from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState([]);
  console.log(products)

  const addToCart = (quantity, itemId) => {
    if (cartDisplay.find((item) => item.itemId === itemId) !== undefined) {
      setCartDisplay((prevState) =>
        prevState.map((item) =>
          item.itemId === itemId ? { ...item, count: Number(quantity) } : item
        )
      );
    } else {
      setCartDisplay((prevItems) => [...prevItems, { itemId, count: Number(quantity)}]);
    }
    return;
  };

    useEffect(function fetchProducts() {
        axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
           
   return (<div>
    <ul>
       <h3>CART</h3>
       
            
            <CartRender 
            cartDisplay = {cartDisplay}
            setCartDisplay = {setCartDisplay} 
            />
          
      </ul>   
        <ul>
          <h3>ITEMS</h3>
          {products.map((item) => (
            
            <ProductDisplay 
               key = {item.id}
               itemId = {item.id}
               title = {item.title}
               description = {item.description}
               price = {item.price}
               addToCart={addToCart}
            />
          
          ))}      
      </ul>
</div>
);
  
}

export default App;
