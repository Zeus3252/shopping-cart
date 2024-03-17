import React, { useState, useEffect } from 'react'


function CartRender ({title, price, description, count, removeFromCart, id, total}) {
    
   
    
    

    return (
        <div>
            
           <li>
              <h3>{title}</h3>
              <p>{description}</p>

              <p>Price: ${price}</p> 
              <p>Quantity:</p>   
              <p>{count}</p>
              
              <button onClick={() => removeFromCart(id)}>Remove all</button> 
            </li>
            
        </div>
    );



}

export default CartRender;