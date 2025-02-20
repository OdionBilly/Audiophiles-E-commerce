// import React from 'react'
import ProductData from "../../public/data.json";
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';
import { Cartegory_2 } from '../components/Cartegory-2';
import { Cartegory_1 } from '../components/Cartegory-1';
import { motion } from "motion/react";




const Headphone = () => {
  const headphones = ProductData.filter(
    (headphones) => headphones.category === "headphones"
  );
  // console.log(headphones);

  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{ duration: 1 }}
    >
   
    <div>
      <Header />
      <div>
        {/* Link to Home */}
      <div className='px-12 mt-4 xl:hidden'>
        <Link to="/">
         <button
         className='cursor-pointer bg-[#D87D4A] text-[#fff] font-primaryregular px-4 py-2'
          type="button">Home</button>
        </Link>
      </div>
        <div>
          {headphones.map((headphone , index) => {
            return (
              <div
                key={index}
                className={`flex flex-col max-md:flex-col items-center py-10 sm:gap-10 md:gap-8 xl:gap-[200px] px-5 xl:px-[40px] xl:mx-[70px] ${
                  index % 2 === 1 ? "xl:flex-row-reverse" : "xl:flex-row"
                } items-center`}
              >
                <div className="sm:size-[250px] md:size-[389px]  xl:size-[450px]">
                  <img
                    className=""
                    src={headphone.categoryImage.desktop}
                    alt=""
                  />
                  {/* <img src="/src/assets/product-xx59-headphones/desktop/image-product.jpg" alt="" /> */}

                </div>

                <div className="py-2 xl:mt-[60px] max-sm:text-center md:text-center xl:text-left ">
                  <h1 className="text-[#D87D4A] font-extralight pb-2">
                    NEW PRODUCT
                  </h1>

                  <h1 className="max-md:w-[250px] xl:w-[400px] max-sm:ml-10 max-sm:leading-9 md:leading-8 xl:eading-9 text-[29px] xl:text-[40px] font-primaryextrabold">
                    {headphone.name}
                  </h1>
                  <p className="sm:w-[320px] xl:w-[445px] py-5 text-[15px] font-primarymedium ">
                    {headphone.description}
                  </p>
                  <Link
                    to={`/headphones/${headphone.id}`}
                    className="bg-[#D87D4A] hover:bg-orange-300 text-white font-medium rounded-sm shadow py-2 px-4 transition duration-300 ease-in-out"
                  >
                    See Product
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </div>
      <Cartegory_1 />

      <Cartegory_2 />
    </div>
    </motion.div>
  );
}
export default Headphone
