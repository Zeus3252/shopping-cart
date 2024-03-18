function CartRender ({ cartItems, removeFromCart, totalPrice }) { //receives cartItems



return (
        <div>
            <ul> 
            <h3>Total: ${totalPrice}</h3> 
            <h3>CART</h3> 
            </ul>    
            {cartItems && cartItems.map((item) => (   //item object       
            <li>
             <h3>{item.title}</h3>
            <p>{item.description}</p>

            <p>Price: ${item.price}</p> 
            <p>Quantity:</p>   
            <p>{item.count}</p>
            
                <button onClick={() => removeFromCart(item.id)}>Remove all</button> 
            </li>
                    
            ))}
                    
        </div>
)}

export default CartRender;