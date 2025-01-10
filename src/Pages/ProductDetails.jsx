// import React from 'react';

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../../public/data.json";
import { BsPlus, BsDash } from "react-icons/bs";
// import Headphone from "./Headphone";
import Bottom from "../components/Bottom";
// import Cart from "../components/Cart";

export const ProductDetails = ({addToCart}) => {

  const { headphoneId } = useParams();
  const [headphone, setHeadphone] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if(quantity > 0 && headphone) {
      addToCart({
        id: headphone.id,
        name: headphone.name,
        price: headphone.price,
        quantity: quantity,
        image: headphone.image,
      });
      setQuantity(0);
    }
  }

  // function for increase of product quantity
  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1)
  }

  // funxtion for decreamant of product
  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  }

  useEffect(() => {
    const foundProduct = ProductData.find(
      (item) => item.id === parseInt(headphoneId, 10)
    );
    setHeadphone(foundProduct);
  }, [headphoneId]);



  // console.log(headphoneId);

  if (!headphone) { 
    return <div>loading</div>;
  }

  return (
    <div>
      <Link to={`/headphones`}>
        <h1 className="px-12 xl:px-[190px] p-2 xlp-4">Go Back</h1>
      </Link>
      <div className="w-full max-sm:px-6 md:px-12 xl:px-[110px] flex max-sm:flex-col gap-10 xl:gap-[80px] mb-10  ">
        <div className='xl:ml-[80px]'>
          <img
            src={headphone.image}
            alt=""
            className="max-sm:w-[327px] max-sm:h-[337px] md:w-[281px] md:h-[481px] xl:w-[540px] xl:h-[560px]"
          />
        </div>
        <div className="w-[327px] py-1 max-sm:mt-2 md:mt-10 xl:mt-[80px] mb-4 ">
          <h1 className="font-extralight text-[#D87D4A] mb-2">New Product</h1>
          <h1 className="max-sm:leading-8 md:leading-10 xl:leading-10 uppercase font-primarybold max-sm:text-[28px] text-[40px] mb-4">
            {headphone.name}
          </h1>
          <p className="w-[327px] xl:w-[445px] font-primaryregular mb-2 text-[#797777]">
            {headphone.description}
          </p>
          <p className="text-[19px] pb-5"> $ {headphone.price}</p>

          {/* button for increase */}
          <div className="gap-2 flex">
            <div className="flex justify-between items-center w-[80px] bg-gray-300">
              <div onClick={decreaseQuantity} className="px-1">
                {" "}
                {<BsDash />}
              </div>
              <div>{quantity}</div>
              <div onClick={increaseQuantity} className="px-1">
                {" "}
                {<BsPlus />}
              </div>
            </div>
            <button className="bg-[#D87D4A] hover:bg-[#c8855f] text-white font-primaryregular text-[16px] py-2 px-4 cursor-pointer"
            onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

        {/* Feature section */}
        <div className='flex max-sm:flex-col sm:flex-col xl:flex-row'>
          <div className='py-10 max-sm:px-5 sm:px-10 xl:px-[190px]'>
             <h1 className='font-primaryextrabold max-sm:text-[25px] xl:text-[30px]'>FEATURES</h1>
             <p className='xl:w-[550px] py-4 text-[#797777]'>{headphone.features}</p>
          </div> 

          <div className='py-10 max-sm:px-5 sm:px-10 xl:px-[10px] flex max-sm:gap-0 sm:gap-[250px] xl:gap-0 max-sm:flex-col sm:flex-row xl:flex-col'>
            <h1 className='font-primaryextrabold max-sm:text-[25px] xl:text-[30px]'>IN THE BOX</h1>
            <div className='text-[#797777]'>
             <p> <span className='text-[rgb(235,144,48)] '>
                 {headphone.includes[0].quantity}x </span>  
                 {headphone.includes[0].item}</p>
             <p><span className='text-[rgb(235,144,48)]'> {headphone.includes[1].quantity}x </span>
                 {headphone.includes[1].item}
             </p>
             <p><span className='text-[rgb(235,144,48)]'>{headphone.includes[2].quantity}x </span> {headphone.includes[2].item}</p>
             <p><span className='text-[rgb(235,144,48)]'> {headphone.includes[3].quantity}x </span>  {headphone.includes[3].item}</p>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className=' max-sm:px-5 sm:px-10 xl:px-[190px] relative flex max-sm:flex-col sm:flex-col xl:flex-col'>
          <div className=''>
            <img src={headphone.gallery.first.desktop} alt=""className='sm:w-[277px] xl:w-[445px]' />
          </div>
          <div className=' max-sm:py-4 sm:py-6 xl:py-8'>
            <img src={headphone.gallery.second.desktop} alt="pics"className='sm:w-[277px] xl:w-[445px]' />
          </div>
          <div className='sm:absolute sm:top-0 sm:right-[35px] xl:absolute xl:top-0 xl:right-[157px]'>
            <img src={headphone.gallery.third.desktop} alt="" className='sm:w-[395px] xl:w-[635px]' />
          </div>
        </div>

        <div className='max-sm:px-5 sm:px-10 xl:px-[190px]'>
          <h1 className='text-[30px] font-primaryextrabold mx-auto text-center py-[60px]'>YOU MUST ALSO LIKE</h1>
          <div className='flex max-sm:flex-col sm:flex-row gap-5 text-center '>
            {headphone.others.map((data, index) => {
              return <div key={index}>
                     <img src={data.image.desktop} alt="" className='w-[350px] max-sm:pb-5 sm:pb-5 xl:pb-10' />
                     <h1 className='pb-2'>{data.name}</h1>
                     <div className=' max-sm:pb-12 sm:pb-[50px] xl:pb-[100px]'>
                      <button className='px-5 py-2 bg-[#D87D4A] text-[#fff]'>SEE MORE</button>
                     </div>
                    </div>
            })}
          </div>
        </div>


  
      <Bottom/>
    </div>
  );
};
ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
