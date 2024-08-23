import React from 'react'
import {useNavigate } from 'react-router-dom';
import headphoneimage from '../mobile-image/Headphone.png'
import headphoneimage2 from '../mobile-image/headphone-2.png'
import headphoneimage3 from "../mobile-image/headphone-3.png";
import headphonetablet from '../tablet-image/headphone-tablet-1.png'
import headphonetablet2 from "../tablet-image/headphone-tablet-3.png";
import headphonetablet3 from "../tablet-image/headphone-tablet-2.png";
import headphonesdesk  from '../assets/headphone-desk-1.png'
import headphonesdesk1 from "../assets/headphone-desk-2.png";
import headphonesdesk2 from "../assets/headphone-desk-3.png";
import { Cartegory_1 } from './Cartegory-1';
import { Cartegory_2 } from './Cartegory-2';



export default function Cart_Headphone() {

  const navigate = useNavigate()

  return (
    <div className=" ">
      <div className="bg-[#101010] text-[#f1f1f1]">
        <div>
          <h1 className="text-[28px] px-[28%] font-primarybold  md:px-[30%] md:text-[40px] lg:px-[40%]">
            HEADPHONES
          </h1>
        </div>
      </div>

      {/* cartegory  section 1 */}
      <div className="lg:flex lg:gap-[150px] lg:px-[11%] lg:mt-10">
        <div className="p-6">
          <img className="sm:hidden" src={headphoneimage} alt="mobile image" />
          <img
            className="max-md:hidden lg:hidden"
            src={headphonetablet}
            alt="headphone-tablet-image"
          />
          <img
            onClick={() => navigate("headphones")}
            className="hidden lg:block"
            src={headphonesdesk}
            alt="headphone-des"
          />
        </div>

        <div className=" text-center py-1 lg:text-left mt-[80px]">
          <h2 className="text-[14px] font-thin text-[#D87D4A] py-2 lg:py-4">
            NEW PRODUCT
          </h2>
          <h1 className="text-[28px] font-primarybold w-[327px] mx-8 md:mx-[200px] lg:mx-0">
            XX99 MARK II HEADPHONES
          </h1>
          <p
            className="w-[327px] text-[15px] font-light mx-8 py-4 overflow-hidden md:w-[572px] md:mx-[100px] 
                      lg:w-[445px] lg:mx-0"
          >
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <button
            onClick={() => navigate("Details-headphones")}
            className="w-[160px] h-[48px] text-[#f1f1f1] bg-[#D87D4A] hover:bg-[#c78c6a]"
            type="button"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>

      {/* Cartegory section 2 */}

      <div className="text-center py-10 mt-10 lg:flex lg:flex-row-reverse lg:gap-[100px] lg:px-[11%] lg:text-left ">
        <div className="p-6">
          <img
            className="sm:hidden"
            src={headphoneimage2}
            alt="mobile-headphone-image"
          />
          <img
            className="max-md:hidden lg:hidden"
            src={headphonetablet2}
            alt=" headphone-tablet-image"
          />
          <img
            className="hidden lg:block"
            src={headphonesdesk1}
            alt="desktop-image"
          />
        </div>

        <div className="lg:mt-[80px] lg:ml-8">
          <h1 className="text-[28px] font-primarybold w-[327px] mx-8 md:mx-[200px] lg:py-1 lg:mx-0">
            XX99 MARK I HEADPHONES
          </h1>

          <p
            className="w-[327px] text-[15px] font-light mx-8 py-4 overflow-hidden md:w-[572px] md:mx-[100px] 
                         lg:w-[445px] lg:text-left lg:mx-0"
          >
            As the gold standard for headphones, the classic XX99 Mark I offers
            detailed and accurate audio reproduction for audiophiles, mixing
            engineers, and music aficionados alike in studios and on the go.
          </p>
          <button
            onClick={() => navigate("Details-headphones-1")}
            className="w-[160px] h-[48px] text-[#f1f1f1] bg-[#D87D4A] hover:bg-[#c78c6a]"
            type="button"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>

      {/* Cartegory section 3 */}

      <div>
        <div className="text-center py-10 mt-10 lg:flex lg:gap-[150px] lg:text-left lg:px-[12%] ">
          <div className="p-6">
            <img
              className="sm:hidden"
              src={headphoneimage3}
              alt=" mobile-headphone-image"
            />
            <img
              className="max-sm:hidden lg:hidden"
              src={headphonetablet3}
              alt="Headphone-tablet-image"
            />
            <img
              className="hidden lg:block"
              src={headphonesdesk2}
              alt="desktop-image"
            />
          </div>
          <div className="lg:mt-[80px]">
            <h1
              className="text-[28px] font-primarybold w-[327px] mx-8 leading-9 md:mx-[200px]
                          lg:mx-0 lg: lg:mt-4"
            >
              XX59 <br /> HEADPHONES
            </h1>

            <p
              className="w-[327px] text-[15px] font-light mx-8 py-4 overflow-hidden md:w-[572px] md:mx-[100px]
                          lg:w-[445px] lg:mx-0"
            >
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <button
              className="w-[160px] h-[48px] text-[#f1f1f1] bg-[#D87D4A] hover:bg-[#c78c6a]"
              type="button"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
      <Cartegory_1 />
      <Cartegory_2 />
    </div>
  );
}
