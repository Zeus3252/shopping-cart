function CartRender ({ cartItems, removeFromCart, totalPrice, image}) { //receives cartItems



return (
    <div className='productContainer'>
        
            <ul> 
            <h3>Total: ${totalPrice}</h3> 
            <h3>CART</h3> 
            </ul>    
            <div className="productsDisplay">
            {cartItems && cartItems.map((item) => (   //item object       
            <ul>
             
             <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img className='productImage' src={item.image} alt={item.title}/>
            <p>Price: ${item.price}</p> 
            <p>Quantity:</p>   
            <p>{item.count}</p>
            
                <button onClick={() => removeFromCart(item.id)}>Remove all</button> 
            </ul>
                 
            ))}
                  
        </div></div>
)}

export default CartRender;