// import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductData from "../data.json";
import { BsPlus, BsDash } from "react-icons/bs";
// import Headphone from "./Headphone";
import Bottom from "../components/Bottom";

export const ProductDetails = () => {

  const { headphoneId } = useParams();
  const [headphone, setHeadphone] = useState(null);
  const [quantity, setQuantity] = useState(0);

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
        <h1 className="px-12 xl:px-[110px] p-2 xlp-4">Go Back</h1>
      </Link>
      <div className="w-full max-sm:px-6 md:px-12 xl:px-[110px] flex max-sm:flex-col gap-10 xl:gap-[80px] mb-10  ">
        <div>
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
          <p className="w-[327px] xl:w-[445px] font-primaryregular mb-2">
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
            <button className="bg-[#D87D4A] hover:bg-[#c8855f] text-white font-primaryregular text-[16px] py-2 px-4 cursor-pointer">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* <Cartitem product={product} quantity={quantity} /> */}
      <Bottom/>
    </div>
  );
};
