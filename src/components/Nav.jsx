import PropTypes from 'prop-types';
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi"
import { Cartegory_1 } from "./Cartegory-1";

// import ShoppingCart from './ShoppingCart';
// import Hero from './Hero';

const  Nav = ({toggleQuantity,clearCart,cartItems}) => { 

  const [cartOpen, setCartOpen] = useState(false)
  const [isopen, setIsOpen] = useState(false)




  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);




  const toggleCart = () => {
    setCartOpen(!cartOpen);
};



  return (
    <div className=' w-full z-50'>
      <header className=" bg-[#101010] text-[#f1f1f1]  py-10 px-[13%]">
        <nav className="flex justify-between items-center py-10">
          <div 
            onClick ={() => setIsOpen(!isopen)}
            className="lg:hidden cursor-pointer">
            {isopen ? <MdOutlineClose size={30}/> : <HiMenu size={30}/>}
          </div>
          <div className="max-sm:text-[24px] md:text-[30px] md:w-[375px]">
             <h1 className="max-md:ml-[10px]">audiophiles</h1>
          </div>


          <div className="md:static absolute bg-[#101010] md:min-h-fit min-h-[50vh] left-0 top-[-100%] flex items-center md:w-auto w-full px-2 text-[13px]">
            <ul
              className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8
                                  max-lg:hidden"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#D87D4A]" : "navlink"
                }
              >
                <li>HOME</li>
              </NavLink>

              <NavLink
                to="/headphones"
                className={({ isActive }) =>
                  isActive ? "text-[#D87D4A]" : "navlink"
                }
              >
                <li>HEADPHONES</li>
              </NavLink>

              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  isActive ? "text-[#D87D4A]" : "navlink"
                }
              >
                <li>SPEAKERS</li>
              </NavLink>

              <NavLink to="/earphones"
               className={({isActive}) => isActive ? 'text-[#D87D4A]' : 'navlink'}>
              
                <li>EARPHONES</li>
              </NavLink>
            </ul>
          </div>
          <div
             className=" relative cursor-pointer">
            <FiShoppingCart />
            {totalItems > 0 && (
              <div className="absolute top-0 right-0  w-3 h-[2px] rounded-full flex justify-center items-center text-lg cursor-pointer" onClick={toggleCart}>
                {totalItems}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* {menuOpen && <Menu toggleMenu={toggleMenu} />} */}

      {isopen &&
      <div className="">
       <Cartegory_1/>
      </div>
      }


      {/* {cartOpen && <ShoppingCart />} */}
      {cartOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" bg-[#fff]"> 
             <div className="absolute top-[220px] right-[20px] xl:right-[190px] bg-[white] w-[350px] xl:w-[377px]">
              <div className="px-[97%] cursor-pointer p-0">
                 <p className=" text-black font-primarybold" onClick={toggleCart}>X</p>
               </div>

              <div>
                <div className="flex justify-between px-4 ">
                   <h1>Cart ({totalItems})</h1>
                   <button className="text-[gray]" onClick={clearCart}>Remove all</button>
                </div>
                <div className="px-4 py-4">
                  {cartItems.map(item => (
                    <div key={item.id}>
                      <div className=" flex justify-between py-2 items-center">
                        <img src={item.image} alt="" className="h-[55px]" />
                        <div className=" max-sm:ml-[20px] max-sm:leading-4 xl:ml-[-50px]">
                           <h1 className="text-[15px]">{item.name}</h1>
                           <p className="text-[15px]"> $ {item.price}</p>
                        </div>

                        <div className="flex gap-5   bg-[#cbcaca] px-3 py-[0.5px]">
                          <button className="" onClick={() => toggleQuantity(item.id,  - 1)}>-</button>
                          <p>{item.quantity}</p>
                          <button onClick={() => toggleQuantity(item.id, + 1)}>+</button>
                        </div>
                      </div>
                           {/* <button className="mx-auto text-right text-[20px] pr-4 mt-0 text-[red] cursor-pointer" onClick={removeItem}>X</button> */}
                     </div>
                  ))}
                </div>

              </div>

              {/* total */}
              <div className="flex justify-between px-4 py-4">
                <span className="text-[#c3c1c1]">TOTAL</span>
                <span>$ {totalPrice}</span>
              </div>

              {/* link to checkout */}
              <NavLink to="/checkout">
                <div className="flex items-center justify-center px-4 py-4">
                  <button className="w-full bg-[#D87D4A] py-[15px] text-center text-[#fff]">Checkout</button>
                </div>
              </NavLink>
            </div>  
          </div>
        </div>
      )}
    </div>
    
    )
};

Nav.propTypes = {
  toggleQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};
export default Nav;
