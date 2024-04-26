import { useState } from "react";

function ProductDisplay({ title, description, price, addToCart, id, image }) {
  const [quantity, setQuantity] = useState(null);

  return (
    <div
      className="flex flex-col rounded overflow-hidden shadow-lg p-4 bg-white"
      style={{ height: "600px", width: "400px" }}
    >
      <div className="flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div
          className="flex justify-center mb-4"
          style={{ height: "250px", width: "100%" }}
        >
          <img className="object-contain h-full" src={image} alt={title} />
        </div>
        <p className="text-gray-900 font-semibold">Price: ${price}</p>
        <div className="mt-4">
          <label
            htmlFor="quantity"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Select a quantity:
          </label>
          <input
            type="number"
            id="quantity"
            min="1"
            max="99"
            step="1"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => {
              let newValue = e.target.value;
              if (!isNaN(newValue) && newValue !== "") {
                setQuantity(newValue);
              }
            }}
            value={quantity}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 self-end"
        onClick={() => {
          setQuantity("");
          addToCart(quantity, id, title, description, price, image);
        }}
      >
        Add To Cart
      </button>{" "}
    </div>
  );
}

export default ProductDisplay;
