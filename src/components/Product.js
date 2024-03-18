import React, { useState, useEffect } from 'react'

function ProductDisplay({title, description, price, addToCart, id, count, image}) {
    
    const [quantity, setQuantity] = useState("")
    
    return (
        <div className='productContainer'>
           <li>
              <h3>{title}</h3>
              <p>{description}</p>
              <img className='productImage' src={image} alt={title}/>
              <p>Price: ${price}</p>    
              <label htmlFor="quantity">Select a quantity:</label>
              <input type="number" min="1" max="99" step="1" onChange={(e) => setQuantity(e.target.value)} value = {quantity}/> 
               
              <button onClick={() => addToCart(quantity, id, title, description, price, image, count)}>Add To Cart</button> 


            </li>
        </div>
    );

}

export default ProductDisplay;