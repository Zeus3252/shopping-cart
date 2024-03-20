import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function NavBar({ cartCount, products, setProducts }) {
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        var result = await response.json();
        let filteredProducts = result.filter((product) =>
          product.title.toLowerCase().includes(searchString.toLowerCase())
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [searchString]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-6 shadow-md flex items-center justify-between">
      <Link to="/" className="text-lg font-semibold hover:text-gray-200">
        Home
      </Link>
      <div className="flex-grow flex justify-center items-center">
        <input
          type="text"
          id="quantity"
          placeholder="Search products"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
      </div>
      <Link to="/cart" className="text-lg font-semibold hover:text-gray-200">
        Cart | {cartCount} items
      </Link>
    </div>
  );
}

export default NavBar;
