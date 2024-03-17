import React, { useState, useEffect } from 'react'

function ProductDisplay({title, description, price, addToCart, id, count}) {
    
    const [quantity, setQuantity] = useState("")
    
    return (
        <div>
           <li>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>Price: ${price}</p>    
              <label htmlFor="quantity">Select a quantity:</label>
              <input type="number" min="1" max="99" step="1" onChange={(e) => setQuantity(e.target.value)} value = {quantity}/> 
               
              <button onClick={() => addToCart(quantity, id, title, description, price, count)}>Add To Cart</button> 


            </li>
        </div>
    );

}

export default ProductDisplay;