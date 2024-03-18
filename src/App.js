import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import CartRender from "./components/Cart"
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import './tailwind.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const removeFromCart = (id) => {
    setCartDisplay((prevState) => prevState.filter((item) => item.id !== id));    
  };
  
  const addToCart = (quantity, id, title, description, price, image) => {
    
    if (cartDisplay.find((item) => item.id === id) !== undefined) {
      setCartDisplay((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, count: Number(quantity) } : item
        )
      );
    } else {
      setCartDisplay((prevItems) => [...prevItems, {title, description, price, image, id, count: Number(quantity)}]);
    }
  
    return;
  };
  


 useEffect(() => {
  try {
    const getData = async () => {

      const response = await fetch("https://fakestoreapi.com/products")
      const result = await response.json()
      console.log('running', result)
      setProducts(result)
  }
      getData();
 
    } catch (error) {
    console.error(error)
  } },[])


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

  
  useEffect(() => {
    function countCartItems() {
      setCartCount(prevState => {
        let cartItems = 0;
        for (let item of cartDisplay) {
          cartItems += item.count;
        }
        return cartItems;
      });
    }
    countCartItems();
  },[cartDisplay])




        
   return (
    <div>
   <NavBar cartCount={cartCount}/>

  
  <Routes>
    <Route path="/" element={<HomePage
     productItems={products}
     addToCart={addToCart}
    />} />
    <Route path="/cart" element={<CartRender 
     cartItems={cartDisplay}
     removeFromCart={removeFromCart}
     totalPrice={total}
    />} />
  </Routes>
     
   </div>
);
  
}

export default App;
