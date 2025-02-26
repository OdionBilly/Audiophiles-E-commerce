// import React from "react";
import productData from "../../public/data.json";
import { Link } from "react-router-dom";
import { Cartegory_1 } from "../components/Cartegory-1";
import { Cartegory_2 } from "../components/Cartegory-2";
import { motion } from "motion/react";
// import {motion} from 'framer-motion'

export default function Speaker() {
  const speakers = productData.filter(
    (speakers) => speakers.category === "speakers"
  );

  speakers.sort((a, b) => {
    if(a.name === 'zx9 Speaker')
    {return -1}
    else if (b.name === 'Zx9 Speaker') 
      {return 1}
    else{return 0;}

  })

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      

    <div>
      <h1 className="text-center text-[25px] font-primaryextrabold text-[#fff] bg-[#151515] pb-4">
        SPEAKERS
      </h1>
      {/* Link to Home */}
      <div className='px-12 mt-4 xl:hidden'>
        <Link to="/">
         <button
         className='cursor-pointer bg-[#D87D4A] text-[#fff] font-primaryregular px-4 py-2'
          type="button">Home</button>
        </Link>
      </div>

      <div>
        {speakers.map((speaker, index) => {
          return (
            <div
              key={index}
              className={`xl:p-[80px] flex max-sm:flex-col md:flex-col xl:gap-[100px] items-center ${
                index % 2 === 1 ? "xl:flex-row-reverse" : "xl:flex-row"
              }`}
            >
              <div className="flex flex-col xl:flex-row mt-10 ">
                <img
                  className=" xl:size-[450px] mx-12"
                  src={speaker.categoryImage.desktop}
                  alt=""
                />
              </div>

              <div className="max-sm:w-[320px] xl:w-[445px] max-sm:text-center md:text-center  xl:text-left mt-5 ">
                <h1 className="text-[#D87D4A] font-extralight pb-2">
                  NEW PRODUCT
                </h1>

                <h1 className=" max-sm:ml-10 max-md:w-[250px] xl:w-[400px] max-sm:leading-9 md:leading-8 xl:eading-9 text-[29px] xl:text-[40px] font-primaryextrabold ">
                  {speaker.name}
                </h1>
                <p className="sm:w-[320px] xl:w-[445px] py-5 text-[15px] font-primarymedium ">
                  {speaker.description}
                </p>

                <Link
                  to={`/Speakers/${speaker.id}`}
                  className="py-2 px-4 text-[#fff] bg-[#D87D4A] hover:bg-[#D87d4A]"
                >
                  See Product
                </Link>
              </div>
            </div>
          );
        })}
     </div>
 
     <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>  
      <Cartegory_1 />
      <Cartegory_2 />
      </motion.div>
     </div>
    </div>
    </motion.div>

  );
}
