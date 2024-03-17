import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDisplay from './components/Product';
import CartRender from './components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState([]);
  const [total, setTotal] = useState(0);

 

  useEffect(() => {

    function calcTotal() {
      setTotal(prevState => {
        let totalPrice = 0;
        for (let item of cartDisplay) {
          totalPrice += item.price * item.count;
        }
        return totalPrice;
      });
    }
    

    calcTotal();
  },[cartDisplay])

  const removeFromCart = (id) => {
    setCartDisplay((prevState) => prevState.filter((item) => item.id !== id));
    
      
 };
  


  const addToCart = (quantity, id, title, description, price) => {
    
    if (cartDisplay.find((item) => item.id === id) !== undefined) {
      setCartDisplay((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, count: Number(quantity) } : item
        )
      );
    } else {
      setCartDisplay((prevItems) => [...prevItems, {title, description, price, id, count: Number(quantity)}]);
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
    <h3>Total: ${total}</h3>
       <h3>CART</h3>
       
       {cartDisplay.map((item) => (
            <CartRender 
               removeFromCart = {removeFromCart}
               key = {item.id}
               title = {item.title}
               description = {item.description}
               price = {item.price}
               count = {item.count}
               id = {item.id}
              
            />
            ))}
      </ul>   
        <ul>
          <h3>ITEMS</h3>
          {products.map((item) => (
            
            <ProductDisplay 
               key = {item.id}
               id = {item.id}
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
