import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import axios from 'axios';


function App() {
  const [products, setProducts] = useState([]);
  
    

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
       <Cart/>
        <ul>
          {products.map((item) => (
            <li>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>    
              <label htmlFor="quantity">Select a quantity:</label>
              <input type="number" min="1" max="99" step="1"/>
              <button onClick={() => addToCart(item)}>Add To Cart</button>


            </li>
          ))}      
      </ul>
</div>
);
  
}

export default App;
