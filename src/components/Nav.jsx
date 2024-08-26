import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
    <div>
      <header className="bg-[#101010] text-[#f1f1f1] px-[13%] py-5 md:px-[8%] ">
        <nav className="flex justify-between items-center py-5">
          <div className="lg:hidden cursor-pointer">
            <h1>
              <HiMenu />
            </h1>
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
                <li>HOME </li>
              </NavLink>
              <NavLink
                to="headphones"
                className={({ isActive }) =>
                  isActive ? "text-[#D87D4A]" : "navlink"
                }
              >
                <li> HEADPHONES </li>
              </NavLink>
              <NavLink
                to="/speakers"
                className={({ isActive }) =>
                  isActive ? "text-[#D87D4A]" : "navlink"
                }
              >
                {" "}
                <li>SPEAKERS </li>
              </NavLink>
              <NavLink
                to="/earphones"
                className={({ isActive }) =>
                  isActive ? "text-[#D87D4A]" : "navlink"
                }
              >
                {" "}
                <li> EARPHONES </li>
              </NavLink>
            </ul>
          </div>

          {/* cart icon */}
          <div className="cursor-pointer">
            <h1>
              <span>0</span>
              <FiShoppingCart />
            </h1>
          </div>
        </nav>
      </header>
    </div>
  );
}
