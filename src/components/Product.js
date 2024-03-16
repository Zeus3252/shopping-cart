import React, { useState, useEffect } from 'react'

function ProductDisplay({title, description, price, addToCart, newItem}) {
    const [input, setInput] = useState("")
    
    return (
        <div>
           <li>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{price}</p>    
              <label htmlFor="quantity">Select a quantity:</label>
              <input type="number" min="1" max="99" step="1" onChange={(e) => setInput(e.target.value)} value = {input}/> 
              {console.log(title)} 
              <button onClick={() => addToCart(title)}>Add To Cart</button> 


            </li>
        </div>
    );

}

export default ProductDisplay;