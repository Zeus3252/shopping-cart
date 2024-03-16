import React, { useState, useEffect } from 'react'


function CartRender ({cartDisplay, setCartDisplay}) {
    

    

    return (
        <div>
            <li>
            <p>{cartDisplay}</p>
            </li>
          
        </div>
    );



}

export default CartRender;