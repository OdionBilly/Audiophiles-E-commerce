import { useState,createContext,} from "react";


export const CartContext = createContext();


const  CartProvider = ({children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product , id)=>  {
      const newItem = {... product , amount: 1} 

      // check if items are in the Cart
      const cartItem = cart.find((item) =>{
        return item.id === id;
      });     
      // if cart item is already in the cart
      if(cartItem) {
        const newCart = [... cart].map (item => {    
          if(item.id === id){
            return{...item, amount: cartItem.amount + 1 };
          } 
          else {
            return item; 
          }
        });
        setCart(newCart);
        }
        else{
          setCart([...cart, newItem]);}

}

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}           

export default CartProvider