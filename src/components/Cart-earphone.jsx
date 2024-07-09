import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Cartegory_1 } from './Cartegory-1';
import { Cartegory_2 } from './Cartegory-2';
import earphonemobile from '../mobile-image/earphone-mobile.png'
import earphonetablet from "../tablet-image/earphone-tablet.png"
import earphonedesk from "../assets/earphone-desktop.png";



export default function Cart_earphone() {

  const navigate = useNavigate()


  return (
    <div>
      <div className="bg-[#101010]  text-[#f1f1f1]">
        <div>
          <h1 className="text-[28px] px-[28%] mt-0 font-primarybold md:text-[40px] md:px-[35%] lg:px-[40%]">EARPHONES</h1>
        </div>
      </div>

      {/* Cartegory section 1 */}

      <div className="lg:flex lg:gap-[150px] lg:px-[11%] lg:mt-10">
        <div className="p-6">
          <img className="sm:hidden" src={earphonemobile} alt="mobile image" />
          <img
            className="max-md:hidden lg:hidden"
            src={earphonetablet}
            alt="headphone-tablet-image"
          />
          <img
            className="hidden lg:block"
            src={earphonedesk}
            alt="headphone-des"
          />
        </div>

        <div className=" text-center py-1 lg:text-left">
          <h2 className="text-[14px] font-thin text-[#D87D4A] py-2 lg:py-4">
            NEW PRODUCT
          </h2>
          <h1 className="text-[28px] font-primarybold w-[327px] mx-8 md:mx-[200px] lg:mx-0">
            YX1 WIRELESS EARPHONES
          </h1>
          <p
            className="w-[327px] text-[15px] font-light mx-8 py-4 overflow-hidden md:w-[572px] md:mx-[100px] 
                      lg:w-[445px] lg:mx-0"
          >
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <button onClick={() => navigate('Details-earphones')}
            className="w-[160px] h-[48px] text-[#f1f1f1] bg-[#D87D4A] hover:bg-[#c78c6a]"
            type="button"
          >
            SEE PRODUCT
          </button>
        </div>
      </div>

      <Cartegory_1 />
      <Cartegory_2 />
    </div>
  );
}


