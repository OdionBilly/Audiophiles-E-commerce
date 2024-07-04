import React from 'react'
import speakerimage from '../mobile-image/speaker-mobile-1.png'
import speakerimage1 from '../mobile-image/speaker-mobile-2.png'
import speakertablet from '../tablet-image/speaker-tablet-1.png'
import speakertablet1 from '../tablet-image/speaker-tablet-2.png'
import speakerdesk from '../assets/speaker-desktop-1.png'
import speakerdesk1 from "../assets/speaker-desktop-2.png";

import { Cartegory_1 } from './Cartegory-1';
import { Cartegory_2 } from './Cartegory-2';

export default function Cart_speaker() {
  return (
    <div>
      <div className="bg-[#101010]  text-[#f1f1f1]">
        <div>
          <h1 className="text-[28px] px-[28%] font-primarybold md:text-[40px] md:px-[35%] lg:px-[45%]">SPEAKERS</h1>
        </div>
      </div>

      {/* cartegory section 1 */}

      <div>
        <div className="lg:flex lg:gap-[150px] lg:px-[11%] lg:mt-10">
          <div className="p-6">
            <img className="sm:hidden" src={speakerimage} alt="mobile image" />
            <img
              className="max-md:hidden lg:hidden"
              src={speakertablet}
              alt="headphone-tablet-image"
            />
            <img
              className="hidden lg:block"
              src={speakerdesk}
              alt="headphone-des"
            />
          </div>

          <div className=" text-center py-1 lg:text-left mt-0">
            <h2 className="text-[14px] font-thin text-[#D87D4A] py-2 lg:py-4">
              NEW PRODUCT
            </h2>
            <h1 className="text-[28px] font-primarybold w-[327px] mx-8 md:mx-[200px] lg:mx-0">
              ZX9 <br /> SPEAKER
            </h1>
            <p
              className="w-[327px] text-[15px] font-light mx-8 py-4 overflow-hidden md:w-[572px] md:mx-[100px] 
                      lg:w-[445px] lg:mx-0"
            >
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button
              className="w-[160px] h-[48px] text-[#f1f1f1] bg-[#D87D4A] hover:bg-[#c78c6a]"
              type="button"
            >
              SEE PRODUCT
            </button>
          </div>
        </div>

        {/* cartegory section 2 */}

        <div className="text-center py-10 mt-10 lg:flex lg:flex-row-reverse lg:gap-[100px] lg:px-[11%] lg:text-left">
          <div className="p-6">
            <img
              className="sm:hidden"
              src={speakerimage1}
              alt="mobile-headphone-image"
            />
            <img
              className="max-md:hidden lg:hidden"
              src={speakertablet1}
              alt=" headphone-tablet-image"
            />
            <img
              className="hidden lg:block"
              src={speakerdesk1}
              alt="desktop-image"
            />
          </div>

          <div className="lg:mt-[80px] lg:ml-8">
            <h1 className="text-[28px] font-primarybold w-[327px] mx-8 md:mx-[200px] lg:py-1 lg:mx-0">
              ZX7 <br /> SPEAKER
            </h1>

            <p
              className="w-[327px] text-[15px] font-light mx-8 py-4 overflow-hidden md:w-[572px] md:mx-[100px] 
                         lg:w-[445px] lg:text-left lg:mx-0"
            >
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
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

