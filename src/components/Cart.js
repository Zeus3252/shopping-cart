function CartRender({ cartItems, removeFromCart, totalPrice, image }) {
    return (
        
        <>
            <ul className="text-center font-bold text-xl mb-4">
                <h3>Total: ${totalPrice}</h3> 
                <h3>CART</h3> 
            </ul>
            {/* Add a container around the cart items with max-width and mx-auto for centering */}
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col space-y-4">
                    {cartItems && cartItems.map((item) => (
                        <div className="flex flex-col rounded overflow-hidden shadow-lg p-4 bg-white" style={{ height: '500px' }}>
                            <div className="flex-grow">
                                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                                <div className="flex justify-center mb-4" style={{ height: '250px' }}>
                                    <img className="object-contain h-full" src={item.image} alt={item.title} />
                                </div>
                                <p className='text-gray-900 font-semibold'>Price: ${item.price}</p>
                                <p className="font-semibold">Quantity: {item.count}</p>
                            </div>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 self-end" onClick={() => removeFromCart(item.id)}>Remove all</button>
                            
                        </div>
                        
                    ))}
                </div>
                <br/>
                
            </div>
        </>
    )
}

export default CartRender;
