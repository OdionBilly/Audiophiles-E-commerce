// import { useState } from "react";

// const Cart = ({ headphone, quantity }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = () => {
//     const existingProduct = cart.find((item) => item.id ===headphone.id);
//     if (existingProduct) {
//       existingProduct.quantity += quantity;
//     } else {
//       setCart((prevCart) => [...prevCart, { ...headphone, quantity }]);
//     }
//   };

//   return (
//     <div className="bg-[green] ml-11">
//       <h1>Cart</h1>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//       <button onClick={addToCart}>Add to Cart</button>
//     </div>
//   );
// };

// export default Cart;