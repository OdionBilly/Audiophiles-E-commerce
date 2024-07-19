import React from 'react'
import headset from "../mobile-image/Group 6.png";
import speaker from "../mobile-image/Group 7.png";
import headphone from "../mobile-image/Group 8.png";


export const Cartegory_1 = () => {
  return (
    <div className="lg:px-[13%]">
      <div className="md:px-[1px] md:flex gap-5 lg:gap-10 lg:flex py-5 mb-8 mt-10">
        <div className="max-sm:m-5">
          <img
            className="md:w-auto md:h-auto lg:w-[350px] lg:h-[284px] cursor-pointer"
            src={headset}
            alt="headset-image"
          />
        </div>
        <div className="max-sm:m-5 lg:w-[350px] lg:h-[284px]">
          <img
            className="md:w-auto md:h-auto lg:w-[350px] lg:h-[284px] cursor-pointer"
            src={speaker}
            alt="speaker-image"
          />
        </div>
        <div className="max-sm:m-5 lg:w-[350px] lg:h-[284px] cursor-pointer">
          <img
            className="md:w-auto md:h-auto lg:w-[350px] lg:h-[284px]"
            src={headphone}
            alt="headphone-image"
          />
        </div>
      </div>
    </div>
  );
}
