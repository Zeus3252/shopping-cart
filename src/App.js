import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";
import CartDisplay from "./components/CartDisplay";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./tailwind.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState([]);
  const [total, setTotal] = useState(null);
  const [cartCount, setCartCount] = useState(null);

  const removeFromCart = (id) => {
    setCartDisplay((prevState) => prevState.filter((item) => item.id !== id));
  };

  const addToCart = (quantity, id, title, description, price, image) => {
    if (cartDisplay.find((item) => item.id === id) !== undefined) {
      setCartDisplay((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, count: quantity } : item
        )
      );
    } else {
      setCartDisplay((prevItems) => [
        ...prevItems,
        { title, description, price, image, id, count: Number(quantity) },
      ]);
    }

    return;
  };

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
        let cartDisplay = 0;
        for (let item of cartDisplay) {
          cartDisplay += item.count;
        }
        return cartDisplay;
      });
    }
    countCartItems();
  }, [cartDisplay]);

  return (
    <div class="bg-[url('https://img.freepik.com/free-vector/white-background-with-hexagonal-line-pattern-design_1017-28442.jpg?w=1380&t=st=1710821100~exp=1710821700~hmac=8ecc68cab877b706a98c984fea5ade2e6d01aa04e6c66708c2ebbf0ff325f7b9')] min-h-screen min-w-full bg-cover bg-no-repeat">
      <NavBar cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<HomePage productItems={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartDisplay
              cartDisplay={cartDisplay}
              removeFromCart={removeFromCart}
              totalPrice={total}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
