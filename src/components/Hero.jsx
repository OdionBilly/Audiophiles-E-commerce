import React from "react";
import heroimage from "../Bgimage/hero-desk.png";

export default function Hero() {
  return (
    <div className="relative overflow-hidden max-sm:bg-mobile_hero_image max-lg:bg-mobile_hero_image bg-no-repeat bg-center bg-[#101010] h-[600px] text-[#f1f1f1]">
      <div
        className="absolute left-[39px] bottom-[149px] max-sm:px-[13%] md:w-[348px] h-[290px] text-center 
                        md:left-[220px] lg:left-1 lg:px-[12%] lg:top-1 lg:w-[1440px] lg:flex lg:text-left"
      >
        <div className=" lg:py-[50px] ">
          <h2 className="text-[14px] font-extralight py-1 md:ml-[10px] tracking-widest  lg:pl-[-10px] lg:text-left">
            NEW PRODUCT
          </h2>

          <h1 className="text-[36px] font-primarymedium md:ml-[10px] md:text-[46px] lg:text-left lg:text-[56px] ">
            XX99 MARK II HEADPHONES
          </h1>

          <p className="font-primaryregular leading-1 py-3 lg:text-left lg:pl-[10px] lg:w-[349px]">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button
            className="w-[116px] h-[48px] py-4 bg-[#D87D4A] text-[13px] lg:ml-[10px] lg:py-2 hover:bg-[#c78c6a]"
            type="button"
          >
            SEE PRODUCT
          </button>
        </div>
        <div className="max-sm:hidden max-md:hidden">
          <img className="max-lg:hidden" src={heroimage} alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
