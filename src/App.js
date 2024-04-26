import React, { useState, useEffect, useContext } from "react";
import HomePage from "./components/HomePage";
import CartDisplay from "./components/CartDisplay";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./tailwind.css";
import AppContext from "./context/AppContext";

function App() {
  const { cartDisplay, setProducts, setTotal, setCartCount } =
    useContext(AppContext);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
      };
      getData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    function calcTotal() {
      setTotal((prevState) => {
        let totalPrice = 0;
        for (let item of cartDisplay) {
          totalPrice += item.price * item.count;
        }
        return totalPrice;
      });
    }
    calcTotal();
  }, [cartDisplay]);

  useEffect(() => {
    function countCartItems() {
      setCartCount((prevState) => {
        let cartTemp = 0;
        for (let item of cartDisplay) {
          cartTemp += item.count;
        }
        return cartTemp;
      });
    }
    countCartItems();
  }, [cartDisplay]);

  return (
    <div class="bg-gray-200 min-h-screen min-w-full bg-cover bg-no-repeat">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
