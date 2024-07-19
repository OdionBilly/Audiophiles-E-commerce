import React from 'react'
import productData from '../data.json'
import { Cartegory_1 } from './Cartegory-1'
import { Cartegory_2 } from './Cartegory-2'

export const Details_headphones = () => {
  
  const headphones = productData.filter(product => product.category === 'headphones') 
  // console.log(headphones[1].categoryImage)  


  return (
    <div className="px-4 md:px-[4%]">
          <button className='lg:px-[4%] text-[15px] font-primarymedium'>Go Back</button>
      {/* mapping throught the json file */}
      <div className="md:flex md:flex-col-1 justify-between pt-5 lg:px-[4%]">
        {headphones.map((headphone) => {
          return (
            <div key={headphones.id}>
              <div className="">
                <img
                  className="sm:hidden"
                  src={headphone.categoryImage.mobile}
                  alt=""
                />
                <div className="max-md:hidden lg:hidden">
                  <img
                    className=""
                    src={headphone.categoryImage.tablet2}
                    alt=""
                  />
                </div>
                <img
                  className="max-sm:hidden max-lg:hidden"
                  src={headphone.categoryImage.desktop}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        {/* used index method in selecting the json data */}
        <div className="md:pl-10 lg:ml-[120px]">
          <div className="py-1 md:py-2">
            <h1 className="text-[#D87D4A] font-thin md:mt-3">NEW PRODUCT</h1>
            <h1 className=" py-2 font-primabold text-[30px] w-[200px] leading-8">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="pb-4 md:pb-4 text-[15px] font-primaryregular md;text-[15px] lg:text-[16px] lg:w-[60%]">
              {headphones[2].description}{" "}
            </p>
            $ {headphones[2].price}
          </div>
          <div>
            <button className="px-8 py-4 bg-[#c5cac5]" type="button">
              - 0 +
            </button>
            <button
              className="bg-[#d87d4A] text-[#f1f1f1] ml-[30px] px-8 py-4 cursor-pointer hover:bg-[#c78c6a]"
              type="button"
            >
              ADD TO CART{" "}
            </button>
          </div>
        </div>
      </div>

      {/* Features section */}

      <div>
        <div className=" lg:flex items-baseline  lg:px-[4%]">
          <div className="md:mt-0">
            <h1 className="py-4 md:mt-10 font-primarymedium text-[25px]">
              FEATURES
            </h1>
            <p className="text-[15px] font-primaryregular lg:text-[16px] sm:w-[327px ] lg:w-[65%]">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat. <br /> <br />
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
          {/* list in the box section */}
          <div className="py-4 max-md:flex md:gap-[30%] max-sm:flex-col md:mt-5  lg:w-full lg:ml-[-250px] ">
            <div>
              <h1 className="text-[25px] font-primarymedium pb-4">
                IN THE BOX
              </h1>
            </div>
            <div>
              <ul className="text-[15px] font-primaryregular">
                <li>
                  <span className="text-[#d87d4A]">
                    {headphones[2].includes[0].quantity}x{" "}
                  </span>
                  <span className="ml-2">{headphones[2].includes[0].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {headphones[2].includes[1].quantity}x{" "}
                  </span>
                  <span className="ml-2">{headphones[2].includes[1].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {headphones[2].includes[2].quantity}x{" "}
                  </span>
                  <span className="ml-2">{headphones[2].includes[2].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {headphones[2].includes[3].quantity}x{" "}
                  </span>
                  <span className="ml-2">{headphones[2].includes[3].item}</span>
                </li>
                <li>
                  <span className="text-[#d87d4A]">
                    {headphones[2].includes[4].quantity}x{" "}
                  </span>
                  <span className="ml-2">{headphones[2].includes[4].item}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* cartegory gallary */}

      <div className="">
        <div className="">
          <div className=" md:mt-5 md:relative lg:relative lg:px-[4%]">
            <div className=" py-0 lg:mt-[100px]">
              {/* first image */}
              <img
                className="md:hidden lg:hidden"
                src="/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden "
                src="/src/assets/product-xx99-mark-two-headphones/tablet/tablet-2.png"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[280px] lg:w-[492px]"
                src="/src/assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg"
                alt="desktop"
              />
            </div>
            {/* second image */}
            <div className="py-8 lg:py-5 md:py-4">
              <img
                className="md:hidden lg:hidden "
                src="/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden"
                src="/src/assets/product-xx99-mark-two-headphones/tablet/tablet-3.png"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[280px] lg:w-[492px]"
                src="/src/assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg"
                alt="desktop"
              />
            </div>
            {/* third image */}
            <div className=" md:py-0 py-0 lg:absolute top-[-1px] lg:left-[48%] bg-[#1010101]">
              <img
                className="md:hidden lg:hidden "
                src="/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
                alt="mobile"
              />
              <img
                className="max-sm:hidden lg:hidden md:absolute top-0 left-[44%] "
                src="/src/assets/product-xx99-mark-two-headphones/tablet/Tablet.png"
                alt="tablet"
              />

              <img
                className="max-sm:hidden max-lg:hidden lg:h-[578px] lg:w-[630px]"
                src="/src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
                alt="desktop"
              />
            </div>
          </div>
        </div>

        {/* you may also like section */}

        <div className=" mt-[50px] lg:px-[4%]">
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
        <Cartegory_1 />
        <Cartegory_2 />
      </div>
    </div>
  );
}

