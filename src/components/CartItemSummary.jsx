// import React from 'react';



const CartItemSummary = ({ cartItems }) => {

//  const {id,name,price,quantity,image} = cartItems
//  console.log(price)


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
  );
};

export default CartItemSummary;