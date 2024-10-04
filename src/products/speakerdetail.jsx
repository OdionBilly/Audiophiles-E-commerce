import React from 'react'
import { useParams , } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProductData from '../data.json'
import { BsPlus, BsDash } from 'react-icons/bs';


export default function Speakerdetail() {
 
  const { speakerId } = useParams();
  const [speaker, setSpeaker] = useState (null);
  const [quantity, setQuantity] = useState (0);

  // increasig the quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

  // reduces Quantity
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }


  useEffect(() => {
    const foundProduct = ProductData.find(
       (item) => item.id === parseInt(speakerId, 10)
   );
    setSpeaker(foundProduct);

  },[speakerId])

  // console.log(speaker)

  if(!speaker) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to={`/speakers`}>
        <h1 className=" md:px-12 xl:px-[110px] p-5">Go back</h1>
      </Link>

      {/* product */}
      <div className="max-sm:px-6 md:px-12 xl:px-[110px] flex max-sm:flex-col md:gap-12 xl:gap-[100px] mb-5  ">
        <div>
          <img
            src={speaker.image}
            alt={speaker.name}
            className="sm:w-[327px] sm:h-[337px] md:w-[281px] md:h-[481px] xl:w-[500px] xl:h-[500px] "
          />
        </div>
        <div className=" mt-5 md:mt-[80px] xl:mt-[50px] ">
          <h1 className="text-[#D87D4A] font-extralight pt-4 mb-2">
            NEW RODUCT
          </h1>
          <h1 className=" w-[200px] leading-10 uppercase font-primarybold max-sm:text-[28px] text-[40px] pb-2">
            {speaker.name}
          </h1>
          <p className="w-[320px] font-primaryregular text-[16px] mb-2">
            {speaker.description}
          </p>
          <h1> $ {speaker.price}</h1>

          {/* increse quantity and addig to cart Function */}
          <div className="flex gap-2 mt-2">
            <div className="w-[80px] flex justify-between items-center bg-gray-400 px-1 ">
              <div onClick={handleIncrease} className="cursor-pointer">
                {<BsPlus />}
              </div>
              <div>{quantity}</div>
              <div onClick={handleDecrease} className="cursor-pointer">
                {<BsDash />}
              </div>
            </div>
            <button className="px-4 py-2 bg-[#D87D4A] hover:bg-[#dc8e61] text-[15px] text-[#fff]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
