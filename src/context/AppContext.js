import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartDisplay, setCartDisplay] = useState([]);
  const [total, setTotal] = useState(null);
  const [cartCount, setCartCount] = useState(null);
  const [searchString, setSearchString] = useState("");

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
      setCartDisplay((prevItems) => [
        ...prevItems,
        { title, description, price, image, id, count: Number(quantity) },
      ]);
    }

    return;
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cartDisplay,
        setCartDisplay,
        total,
        setTotal,
        cartCount,
        setCartCount,
        searchString,
        setSearchString,
        removeFromCart,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
