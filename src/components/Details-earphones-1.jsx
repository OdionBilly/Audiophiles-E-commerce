import React from "react";
import ProductData from "../data.json";
import { Cartegory_1 } from "./Cartegory-1";
import { Cartegory_2 } from "./Cartegory-2";
import Earphone from "../Pages/Earphone";

export const Details_earphones = () => {
  const earphones = ProductData.filter(
    (product) => product.category === "earphones"
  );
  console.log(earphones.categoryImage);

  return (
    <div>
      <div className="px-5 md:px-10 lg:px-[8%] py-5">
        <div>
          <button
            className="px-4 bg-[#D87D4A] font-thin text-[#fff]"
            type="button"
          >
            Go back
          </button>
        </div>

        {/* mapping theough the product */}
        <div className="lg:mt-4">
          <div className=" flex max-sm:flex-col gap-10 ">
            <div className=" mt-10">
              {earphones.map((earphone) => {
                return (
                  <div key={earphone.id}>
                    <div>
                      <img
                        className="md:hidden"
                        src={earphone.categoryImage.mobile}
                        alt="mobile picture"
                      />
                      <img
                        className="max-sm:hidden lg:hidden xl:hidden"
                        src={earphone.categoryImage.tablet2}
                        alt="tablet photo"
                      />
                      <img
                        className="max-sm:hidden max-lg:hidden w-[400px]"
                        src={earphone.categoryImage.mobile}
                        alt="desktop photo"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* section 2 */}

            <div className="">
              <div className="py-5 md:ml-[80px] md:w-[339px]">
                <h1 className="text-[#D87D4A] text-[14px] py-4">
                  {" "}
                  NEW PRODUCT{" "}
                </h1>
                <h1 className="font-primarybold text-[30px] lg:text-[40px] w-[200px] md:w-[200px] lg:w-[400px] leading-8 py-4">
                  {earphones[0].name}{" "}
                </h1>
                <p className="text-[15px] sm:w-[100%] font-primaryregular py-2">
                  {earphones[0].description}
                </p>

                <p> ${earphones[0].price}</p>

                <div className="flex gap-4 py-4">
                  <button
                    className="p-3 w-[100px] bg-[#989696] cursor-pointer hover:bg-[#dedada]"
                    type="button"
                  >
                    - 1 +
                  </button>
                  <button
                    className="font-primaryregular text-[#fff] p-3 bg-[#D87D4A] text-[15px] cursor-pointer hover:bg-[#ab704d]"
                    type="button"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* features */}

          <div className="lg:flex mt-5 md:mt-10 lg:mt-[100px] lg:gap-[190px]">
            <div className="lg:w-[635px]">
              <h1 className="text-[24px] lg:text-[32px] font-primarymedium py-3">
                FEATURES
              </h1>
              <p className=" font-primaryregular text-[15px]">
                Experience unrivalled stereo sound thanks to innovative acoustic
                technology. With improved ergonomics designed for full day
                wearing, these revolutionary earphones have been finely crafted
                to provide you with the perfect fit, delivering complete comfort
                all day long while enjoying exceptional noise isolation and
                truly immersive sound.<br></br>
              </p>
              <p className="py-5 text-[15px] font-primaryregular">
                The YX1Wireless Earphones features customizable controls for
                volume, music, calls, and voice assistants built into both
                earbuds. The new 7-hour battery life can be extended up to 28
                hours with the charging case, giving you uninterrupted play
                time. Exquisite craftsmanship with a splash resistant design now
                available in an all new white and grey color scheme as well as
                the popular classic black.
              </p>
            </div>

            {/* IN THE BOX */}

            <div className="">
              <div className="flex max-sm:flex-col md:flex-row  lg:flex-col items-baseline md:gap-[150px] lg:gap-3">
                <div>
                  <h1 className=" py-6 text-[24px] lg:text-[32px]">
                    IN THE BOX
                  </h1>
                </div>

                <div>
                  <ul className="py-2 text-[15px] font-primaryregular">
                    <li>
                      <span className="text-[#D87D4A]">
                        {earphones[0].includes[0].quantity}x
                      </span>{" "}
                      <span className="ml-4">
                        {earphones[0].includes[0].item}
                      </span>
                    </li>

                    <li>
                      <span className="text-[#D87D4A]">
                        {earphones[0].includes[1].quantity}x
                      </span>{" "}
                      <span className="ml-4">
                        {earphones[0].includes[1].item}
                      </span>
                    </li>
                    <li>
                      <span className="text-[#D87D4A]">
                        {earphones[0].includes[2].quantity}x
                      </span>{" "}
                      <span className="ml-4">
                        {earphones[0].includes[2].item}
                      </span>
                    </li>
                    <li>
                      <span className="text-[#D87D4A]">
                        {earphones[0].includes[3].quantity}x
                      </span>{" "}
                      <span className="ml-4">
                        {earphones[0].includes[3].item}
                      </span>
                    </li>
                    <li>
                      <span className="text-[#D87D4A]">
                        {earphones[0].includes[4].quantity}x
                      </span>{" "}
                      <span className="ml-4">
                        {earphones[0].includes[4].item}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cartegory section */}

        <div className="">
          <div className=" md:mt-5 md:relative lg:relative lg:px-[%]">
            <div className=" py-0 lg:mt-[100px]">
              {/* first image */}
              <img
                className="md:hidden lg:hidden"
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden w-[277px] h-[174px] "
                src="/src/assets/product-yx1-earphones/tablet/image-gallery-1.jpg"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[280px] lg:w-[492px]"
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
                alt="desktop"
              />
            </div>
            {/* second image */}
            <div className="py-8 lg:py-5 md:py-4">
              <img
                className="md:hidden lg:hidden "
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden  w-[277px] h-[174px]"
                src="/src/assets/product-yx1-earphones/tablet/image-gallery-2.jpg"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[280px] lg:w-[492px]"
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-2.jpg"
                alt="desktop"
              />
            </div>
            {/* third image */}
            <div className=" md:py-0 py-0 lg:absolute top-[-1px] lg:left-[48%] bg-[#1010101]">
              <img
                className="md:hidden lg:hidden "
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden md:absolute top-0 left-[42%] w-[395px] h-[368px] "
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-1.jpg"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[578px] lg:w-[630px]"
                src="/src/assets/product-yx1-earphones/desktop/image-gallery-3.jpg"
                alt="desktop"
              />
            </div>
          </div>
        </div>

        {/* you may also like section */}
        
        <div className=" mt-[50px] lg:px-[%]">
          <h1 className="font-primarymedium text-[25px]">YOU MAY ALSO LIKE</h1>
          <div className="text-center py-4 md:flex gap-5">
            <div className="md:py-5">
              <img
                className="md:hidden lg:hidden"
                src="/src/shared/mobile/image-xx99-mark-one-headphones.jpg"
                alt=""
              />
              <img
                className="max-sm:hidden lg:hidden "
                src="/src/shared/tablet/image-xx99-mark-one-headphones.jpg"
                alt="tablet-image"
              />
              <img
                className="max-sm:hidden max-lg:hidden"
                src="/src/shared/desktop/image-xx99-mark-one-headphones.jpg"
                alt="desktop-image"
              />
              <h2 className="font-primaryregular text-[20px] py-4">
                XX99 MARK 1
              </h2>
              <button
                className="bg-[#d87d4A] px-6 py-2 text-[#f1f1f1] text-[13px] hover:bg-[#c78c6a] "
                type="button"
              >
                SEE PRODUCT
              </button>
            </div>

            <div className="py-5">
              <img
                className=" md:hidden lg:hidden"
                src="/src/shared/mobile/image-xx59-headphones.jpg"
                alt=""
              />
              <img
                className="max-sm:hidden lg:hidden"
                src="/src/shared/tablet/image-xx59-headphones.jpg"
                alt=""
              />
              <img
                className="max-sm:hidden max-lg:hidden"
                src="/src/shared/desktop/image-xx59-headphones.jpg"
                alt=""
              />
              <h2 className="font-primaryregular text-[20px] py-4">XX59</h2>
              <button
                className="bg-[#d87d4A] px-6 py-2 text-[#f1f1f1] text-[13px] hover:bg-[#c78c6a]"
                type="button"
              >
                SEE PRODUCT
              </button>
            </div>

            <div className="py-5">
              <img
                className="md:hidden lg:hidden"
                src="/src/shared/mobile/image-zx9-speaker.jpg"
                alt=""
              />
              <img
                className="max-sm:hidden lg:hidden"
                src="/src/shared/tablet/image-zx9-speaker.jpg"
                alt=""
              />

              <img
                className="max-sm:hidden max-lg:hidden"
                src="/src/shared/desktop/image-zx9-speaker.jpg"
                alt="desktop"
              />
              <h2 className="font-primaryregular text-[20px] py-4">
                ZX9 SPEAKER
              </h2>
              <button
                className="bg-[#d87d4A] px-6 py-2 text-[#f1f1f1] text-[13px] hover:bg-[#c78c6a] "
                type="button"
              >
                SEE PRODUCT
              </button>
            </div>
          </div>
          </div>


      </div>
      <Cartegory_1 />
      <Cartegory_2 />
    </div>
  );
};
