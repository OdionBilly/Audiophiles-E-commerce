import React from 'react'
import bitmapB from "../mobile-image/mobile-BitmapB.png";
import bitmapc from "../mobile-image/Bitmap-b-tablet.png";
import bitmapd from "../mobile-image/Bitmap-2.png";


export const Cartegory_2 = () => {
  return (
    <div className='md:mt-[100px] lg:mt-0 lg:px-[11%]'>
      <div className="lg:flex flex-row-reverse w-full lg:px-[%] lg:mt-8] lg:gap-[9px]">
        <div className="mx-2 text-center mt-10 md:mx-2]">
          <img
            className="sm:hidden w-[375px]"
            src={bitmapB}
            alt="mobile-image"
          />
          <img
            className="max-md:hidden lg:hidden md:w-[788px]"
            src={bitmapc}
            alt="tablet-image"
          />
          <img className="max-lg:hidden" src={bitmapd} alt="desktop-image" />
        </div>
        <div className="mx-2 mt-8 lg:mt-[130px] lg:ml-[-50px]">
          <h1
            className="py-4 px-4 ml-2 leading-10 text-[28px] font-primarymedium w-[327px] md:w-[573px] md:text-[40px] md:text-center md:mx-[40px]
                        lg:text-left lg:w-[510px] lg:ml-[17px] "
          >
            BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO
            GEAR
          </h1>
          <p
            className="text-[17px] font-primaryregular w-full h-[250px] mt-2 md:w-[573px] md:text-center md:mx-[40px]
                       lg:w-[520px] lg:text-left"
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the bestplace to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}
