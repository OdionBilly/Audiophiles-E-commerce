// import React from 'react'
import { Cartegory_1 } from '../components/Cartegory-1'
import { Cartegory_2 } from '../components/Cartegory-2'
import ProductData from '../../public/data.json'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'


export default function Earphone() {

  const earphones = ProductData.filter(
    (earphones) => earphones.category === 'earphones');

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{ duration: 1 }}
    >
     
    <div>
      <h1 className="text-center text-[25px] font-primaryextrabold text-[#fff] bg-[#151515] pb-4">
        EARPHONES
      </h1>
      {/* Link to Home */}
      <div className='px-12 mt-4 xl:hidden'>
        <Link to="/">
         <button
         className='cursor-pointer bg-[#D87D4A] text-[#fff] font-primaryregular px-4 py-2'
          type="button">Home</button>
        </Link>
      </div>
      <div className="px-4 md:px-12 xl:px-[110px]">
        {earphones.map((earphone, index) => {
          return (
            <div
              key={index}
              className="flex max-sm:flex-col xl:gap-[100px] sm:gap-0 md:gap-[70px] mt-10"
            >
              <div>
                <img
                  src={earphone.categoryImage.desktop}
                  alt="image"
                  className="sm:size-[250px] md:size-[389px]  xl:size-[450px]"
                />
              </div>

              <div className=" mt-4 xl:mt-[80px]">
                <h1 className="font-thin text-[20px] text-[#D87D4A] pb-2">
                  New Product
                </h1>
                <h1 className="w-[300px] leading-8 xl:leading-10 font-primarybold uppercase max-sm:text-[28px] text-[40px]">
                  {earphone.name}
                </h1>
                <p className="xl:w-[440px] mt-3 mb-3 font-primaryregular">
                  {earphone.description}
                </p>
                <Link
                  to={`/earphones/${earphone.id}`}
                  className="px-4 py-2 bg-[#D87D4A] hover:bg-[#cc8359] text-[#fff]
                  font-primaryregular"
                >
                  {" "}
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className='xl:ml-10'>
        <Cartegory_1 />
      </div>
      <Cartegory_2 />
    </div>
    </motion.div>
  );
}
