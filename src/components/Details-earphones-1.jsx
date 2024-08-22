import React from 'react'
import ProductData from '../data.json'
import { Cartegory_1 } from './Cartegory-1'
import { Cartegory_2 } from './Cartegory-2'
import Earphone from '../Pages/Earphone';



export const Details_earphones = () => {
  const earphones = ProductData.filter((product) => product.category === 'earphones');
  console.log(earphones.categoryImage);

  return (
    <div>
      <div className="px-5 md:px-10 lg:px-[8 k%]">
        <div>
          <button
            className="px-4 bg-[#D87D4A] font-thin text-[#fff]"
            type="button"
          >
            Go back
          </button>
        </div>

        {/* mapping theough the product */}
        <div>
          <div>
            {earphones.map((earphone) => {
              return (
                <div key={earphone.id}>
                  <div>
                    <img src={earphone.categoryImage.mobile} alt="product" />
                  </div>
                </div>
              );
            })}
          </div>
          {/* section 2 */}

          <div>
            <div className="py-5">
              <h1 className="text-[#D87D4A] text-[14px] py-4"> NEW PRODUC </h1>
              <h1 className="font-primarybold text-[30px] w-[200px] leading-8 py-4">
                {earphones[0].name}
              </h1>
              <p className="text-[15px] font-primaryregular py-2">
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

          {/* features */}

          <div>
            <div>
              <h1 className="text-[24px] font-primarymedium py-3">FEATURES</h1>
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
          </div>

          {/* IN THE BOX */}

          <div>
            <div className=''>
              <div>
                <h1 className=" py-6 text-[24px]">IN THE BOX</h1>
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
      <Cartegory_1 />
      <Cartegory_2 />
    </div>
  );
}
