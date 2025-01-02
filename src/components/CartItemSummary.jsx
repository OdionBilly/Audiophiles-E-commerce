// import React from 'react';

import { useState } from "react";



const CartItemSummary = ({ cartItems }) => {

 const {id,name,price,quantity,image} = cartItems
 console.log(name)


  return (
    <div className="cart-item-summary">
      {cartItems.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.name} className="w-10" />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
     
      </div>  
    // </div>
  );
};

export default CartItemSummary;