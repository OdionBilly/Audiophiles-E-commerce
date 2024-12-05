import { useState } from "react"
import { FiShoppingCart } from "react-icons/fi"




const ShoppingCart = ({toggleQuantity,removeItem,clearCart,cartItems,onclick}) => {

    const [cartOpen, setCartOpen] = useState(false)

   

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);



    // console.log(totalItems)



    return(
        <div>
             <div
              onClick={onclick}
              className="text-[#fffdfb] pointer relative">
                <FiShoppingCart/>
                {/* {totalItems > 0 && ( */}
                     <div className="absolute top-0 right-0  w-3 h-[2px] rounded-full flex justify-center items-center text-sm  ">
                        {totalItems}
                    </div>   
                {/* )}    */}
                  
              </div>
        </div>
    
       
    )

}

export default ShoppingCart