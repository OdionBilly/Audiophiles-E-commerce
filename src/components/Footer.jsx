import { NavLink } from 'react-router-dom'
import { BsFacebook , BsTwitter , BsInstagram} from 'react-icons/bs'
import { motion } from 'framer-motion'

export default function Footer() {
  
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{ duration: 1 }}
    >
    <div className="bg-[#101010] text-[#f1f1f1] py-10 pb-10  mt-[8%] md:px-[8%] md:mt-[2%] lg:mt-[70px]">
      <div className="lg:flex justify-between items-baseline lg:w-[1440px] lg:px-[13%]">
        <div className="lg:ml-[-165px]">
          <h1 className="max-sm:text-[25px] font-primarybold mx-[35%] py-10 md:text-[35px] md:mx-4 md:py-4">
            audioPhiles
          </h1>
        </div>
        <div className="">
          <ul className="sm:flex text-[13px] px-[45%] py-2 leading-10 md:flex md:px-4 md:gap-5 font-primaryregular lg:mr-[30px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#D87D4A]" : "navlink"
              }
            >
              <li>HOME</li>
            </NavLink>
            <br />
            <NavLink
              to="/headphones"
              className={({ isActive }) =>
                isActive ? "text-[#D87D4A]" : "navlink"
              }
            >
              <li className="max-sm:ml-[-20px]"> HEADPHONES</li>
            </NavLink>{" "}
            <br />
            <NavLink
              to="/speakers"
              className={({ isActive }) =>
                isActive ? "text-[#D87D4A]" : "navlink"
              }
            >
              <li className="max-sm:ml-[-10px]">SPEAKERS</li>
            </NavLink>{" "}
            <br />
            <NavLink
              to="/earphones"
              className={({ isActive }) =>
                isActive ? "text-[#D87D4A]" : "navlink"
              }
            >
              <li className="max-sm:ml-[-15px]">EARPHONES</li>
            </NavLink>{" "}
            <br />
          </ul>
        </div>
      </div>

      <div className="">
        <div className="lg:ml-[1px]">
          <p className="text-[15px] text-center py-6 font-thin px-8 md:text-left md:pl-[10px] md:w-[689px] md:mt-8 lg:px-[8%] lg:ml-[-90px]">
            Audiophile is an all in one stop to fulfill your audio needs. We re
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className=" md:flex items-baseline ">
          <div>
            <p className="text-center text-[15px] font-thin md:w-[300px] md:text-left md:px-4 lg:ml-[-10px]">
              Copyright 2021. All Rights Reserved
            </p>
          </div>
          <div className="px-[42%] py-4 flex gap-2 lg:w-[200px] lg:ml-[29%]">
            <div className="hover:bg-[#D87D4A] hover:text-[#101010]">
              <BsFacebook />
            </div>
            <div className="hover:bg-[#D87D4A] hover:text-[#101010]">
              <BsTwitter />
            </div>
            <div className="hover:bg-[#d87d4a] hover:text-[#101010]">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}
