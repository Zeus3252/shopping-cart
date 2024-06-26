import ProductDisplay from "./ProductDisplay";
import AppContext from "../context/AppContext";
import React, { useContext } from "react";

function HomePage() {
  const { products, addToCart } = useContext(AppContext);
  return (
    <div>
      <br />
      <h3 className="bg-gradient-to-r from-blue-500 to-blue-700 text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text leading-none  itemLabel text-center">
        Items
      </h3>
      <br />
      <br />
      <div className="productsDisplay">
        {products &&
          products.map((item) => (
            <ProductDisplay
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
              addToCart={addToCart}
            />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
