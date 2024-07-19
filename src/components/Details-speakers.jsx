import React from "react";
import ProductData from "../data.json";
import { Cartegory_1 } from "./Cartegory-1";
import { Cartegory_2 } from "./Cartegory-2";

export const Details_speakers = () => {
  const speakers = ProductData.filter(
    (product) => product.category === "speakers"
  );
  console.log(speakers[1].gallery);
  return (
    <div className="lg:px-[8%]">
      <div className="md:px-[6%] py-2">
        <button className="max-sm:px-[6%]">go Back</button>
        <div className=" md:flex  md:gap-[80px] lg:gap-[170px] py-4">
          <div className="max-sm:px-[6%]">
            {speakers.map((speaker) => {
              return (
                <div key={speakers.id}>
                  <div>
                    <img
                      className="sm:hidden"
                      src={speaker.categoryImage.mobile}
                      alt=""
                    />
                    <img
                      className="max-md:hidden lg:hidden"
                      src={speaker.categoryImage.tablet2}
                      alt=""
                    />
                    <img
                      className="max-sm:hidden max-lg:hidden w-[400px]"
                      src={speaker.categoryImage.desktop}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* add to cart section */}

          <div>
            <div className="py-8 text-left px-5 lg:mt-10">
              <h1 className="font-thin text-[#D87D4A] sm:text-[15px]">
                NEW PRODUCT
              </h1>
              <h1 className="text-[30px] font-primarymedium">
                {speakers[1].name}
              </h1>
              <p className="font-primaryregular text-[15px] py-2 md:w-[327px] ">
                {speakers[1].description}
              </p>
              <p className="py-2">${speakers[1].price}</p>

              <button className="py-2 px-4 bg-[#dfdbdb]" type="button">
                + 1 -
              </button>
              <span className="pl-10">
                <button
                  className="text-[13px] text-[#f1f1f1] px-4 py-2 bg-[#D87D4A] hover:bg-[#d2865b]"
                  type="button"
                >
                  ADD TO CART
                </button>
              </span>
            </div>
          </div>
        </div>

        {/* feature section */}
        <div className="max-sm:px-[6%] lg:px-0 lg:flex items-baseline lg:gap-[199px] lg:mt-3">
          <div className="py-4">
            <h1 className="font-primarybold text-[24px] py-4">FEATURES</h1>
            <p className="font-primaryregular text-[15px] lg:w-[500px]">
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m). <br /> <br /> Discover clear, more natural sounding highs
              than the competition with ZX9’s signature planar diaphragm
              tweeter. Equally important is its powerful room-shaking bass
              courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to
              enjoy equal sound quality whether in a large room or small den.
              Furthermore, you will experience new sensations from old songs
              since it can respond to even the subtle waveforms.
            </p>
          </div>
          {/* in the box section */}
          <div className="max-md:flex max-sm:block md:gap-[30%] items-baseline py-2">
            <div>
              <h1 className="text-[24px] font-primarybold py-2">IN THE BOX</h1>
            </div>
            <div className="text-[15px] font-primaryregular py-2">
              <ul>
                <li>
                  <span className="text-[#d87d4A]">
                    {speakers[1].includes[0].quantity}X
                  </span>
                  <span className="ml-4">{speakers[1].includes[0].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {speakers[1].includes[1].quantity}X
                  </span>
                  <span className="ml-4">{speakers[1].includes[1].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {speakers[1].includes[2].quantity}X
                  </span>
                  <span className="ml-4">{speakers[1].includes[2].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {speakers[1].includes[3].quantity}X
                  </span>
                  <span className="ml-4">{speakers[1].includes[3].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {speakers[1].includes[4].quantity}X
                  </span>
                  <span className="ml-4">{speakers[1].includes[4].item}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* gallery feature section */}
        <div>
          <div className="md:mt-5 md:relative lg:relative max-sm:px-[6%] md:px-[1%]">
            <div className=" py-0 lg:mt-[50px]">
              {/* first image */}
              <img
                className="md:hidden lg:hidden"
                src="/src/assets/product-zx9-speaker/mobile/image-gallery-1.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden "
                src="/src/assets/product-zx9-speaker/tablet/tablet-zx9-3.png"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[280px] lg:w-[492px]"
                src={speakers[1].gallery.first.desktop}
                alt="desktop"
              />
            </div>
            {/* second image */}
            <div className="py-8 lg:py-5 md:py-4">
              <img
                className="md:hidden lg:hidden"
                src={speakers[1].gallery.second.mobile}
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden"
                src="/src/assets/product-zx9-speaker/tablet/tablet-zx9-2.png"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:w-[492px]"
                src={speakers[1].gallery.second.desktop}
                alt="desktop"
              />
            </div>
            {/* third image */}
            <div className=" md:py-0 py-0 lg:absolute top-[-1px] lg:left-[49%] bg-[#1010101]">
              <img
                className="md:hidden lg:hidden "
                src={speakers[1].gallery.third.desktop}
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden md:absolute top-0 left-[44%] "
                src="/src/assets/product-zx9-speaker/tablet/tablet.png"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[610px] lg:w-[630px]"
                src={speakers[1].gallery.third.desktop}
                alt="desktop"
              />
            </div>
          </div>
        </div>

        <Cartegory_1 />
        <Cartegory_2 />
      </div>
    </div>
  );
};
