function CartDisplay({ cartDisplay, removeFromCart, totalPrice, addToCart }) {
  return (
    <>
      <ul className="text-center font-bold text-xl mb-4">
        <h3>CART</h3>

        <h3 className="text-green-500">
          Total:&nbsp;
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalPrice)}
        </h3>
      </ul>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col space-y-4">
          {cartDisplay &&
            cartDisplay.map((item) => (
              <div
                className="flex flex-col rounded overflow-hidden shadow-lg p-4 bg-white"
                style={{ height: "550px" }}
              >
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div
                    className="flex justify-center mb-4"
                    style={{ height: "250px" }}
                  >
                    <img
                      className="objenct-contain h-full"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <p className="text-gray-900 font-semibold">
                    Price: ${item.price}
                  </p>
                  <p className="font-semibold">Quantity: {item.count}</p>
                  <br />
                </div>
                <label
                  htmlFor="quantity"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Update quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max="99"
                  step="1"
                  className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) =>
                    !isNaN(e.target.value) &&
                    e.target.value !== "" &&
                    addToCart(
                      e.target.value,
                      item.id,
                      item.title,
                      item.description,
                      item.price,
                      item.image
                    )
                  }
                  value={item.count}
                />

                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 self-end"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove all
                </button>
              </div>
            ))}
        </div>
        <br />
      </div>
    </>
  );
}

export default CartDisplay;
