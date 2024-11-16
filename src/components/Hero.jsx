// import React from 'react'
import heroimage from '../Bgimage/Bitmap-bg-mobile.png'
import tabletimage from '../Bgimage/Bitmap-bg-Tablet.png'
import desktop from '../Bgimage/Bitmap-bg-mobile.png'

export default function Hero() {
  return (
    <div>
      <div className="relative bg-[#101010] text-[#fff] xl:flex xl:gap-[180px] px-[13%] pb-10">
        <div
          className="max-sm:absolute md:absolute lg:relative w-[379px] py-[100px] max-sm:text-center max-sm:ml-[-40px] 
           md:text-center md:mt-[60px]  lg:mt-0 lg:text-left md:ml-[90px] lg:ml-0 "
        >
          <h1 className="text-[#F1F1F1] max-sm:px-[100px]">NEW PRODUCT</h1>
          <p className="font-primarybold max-sm:text-[36px] md:text-[50px] max-sm:leading-9 text-[56px] leading-[60px] pt-4">
            XX99 MARK HEADPHONES
          </p>
          <p className="text-[#F1F1F1] max-sm:pt-5 pt-[30px] pb-5 max-sm:text-[15px] max-sm:px-[30px] md:px-[10px] ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button
            className="w-[160px] h-[48px] px-[5px] py-[5px] bg-[#D87D4A] text-[13px] hover:bg-[#FBAF85]"
          >
            SEE PRODUCT
          </button>
        </div>
        <div className=" md:ml-[100px] lg:px-0">
          <img src={heroimage} alt="" className="xl:mt-[-50px]" />
          <img
            src={desktop}
            alt=""
            className="sm:hidden md:hidden max-md:hidden max-lg:hidden  "
          />
          <img
            src={tabletimage}
            alt=""
            className="max-sm:hidden md:hidden lg:hidden xl:hidden "
          />
        </div>
      </div>
    </div>
  );
  
}
