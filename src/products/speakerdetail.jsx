// import React from 'react'
import PropTypes from 'prop-types';
import { useParams , } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ProductData from '../data.json'
import { BsPlus, BsDash } from 'react-icons/bs';
import Bottom from '../components/Bottom';
// import { HiMenu } from 'react-icons/hi';


export default function Speakerdetail({addToCart}) {
 
  const { speakerId } = useParams();
  const [speaker, setSpeaker] = useState (null);
  const [quantity, setQuantity] = useState (0);

  // increasig the quantity
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

  // reduces Quantity
  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }


  useEffect(() => {
    const foundProduct = ProductData.find(
       (item) => item.id === parseInt(speakerId, 10)
   );
    setSpeaker(foundProduct);

  },[speakerId])

  // console.log(speaker)

  // handle cart
  const handleAddToCart = () => {
    if(quantity > 0 && speaker) {
      addToCart({
        id: speaker.id,
        name: speaker.name,
        price: speaker.price,
        quantity: quantity,
        image: speaker.image
        });
      setQuantity(0);
    }
  }

  if(!speaker) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to={`/speakers`}>
        <h1 className=" md:px-12 xl:px-[190px] p-5">Go back</h1>
      </Link>

      {/* product */}
      <div className="max-sm:px-6 md:px-12 xl:px-[190px] flex max-sm:flex-col md:gap-12 xl:gap-[150px] mb-5  ">
        <div>
          <img
            src={speaker.image}
            alt={speaker.name}
            className="sm:w-[327px] sm:h-[337px] md:w-[281px] md:h-[481px] xl:w-[500px] xl:h-[500px] "
          />
        </div>
        <div className=" mt-5 md:mt-[80px] xl:mt-[50px] ">
          <h1 className="text-[#D87D4A] font-extralight pt-4 mb-2">
            NEW RODUCT
          </h1>
          <h1 className=" w-[200px] leading-10 uppercase font-primarybold max-sm:text-[28px] text-[40px] pb-2">
            {speaker.name}
          </h1>
          <p className="w-[320px] font-primaryregular text-[16px] mb-2 text-[#797777]">
            {speaker.description}
          </p>
          <h1> $ {speaker.price}</h1>

          {/* increse quantity and addig to cart Function */}
          <div className="flex gap-2 mt-2">
            <div className="w-[80px] flex justify-between items-center bg-gray-400 px-1 ">
              <div onClick={handleIncrease} className="cursor-pointer">
                {<BsPlus />}
              </div>
              <div>{quantity}</div>
              <div onClick={handleDecrease} className="cursor-pointer">
                {<BsDash />}
              </div>
            </div>
            <button 
            onClick={handleAddToCart}
            className="px-4 py-2 bg-[#D87D4A] hover:bg-[#dc8e61] text-[15px] text-[#fff]">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="px-1 xl:py-10 flex max-sm:flex-col sm:flex-col xl:flex-row  ">
          <div className="py-10 max-sm:px-5 sm:px-10 xl:px-[190px]">
            <h1 className='font-primarybold  max-sm:text-[20px] sm:text-[25px] xl:text-[30px]'>FEATURES</h1>
            <p className="xl:w-[550px] py-4 text-[#797777]">{speaker.features}</p>
          </div>

          <div className="py-10 max-sm:px-5 sm:px-10 xl:px-[10px] flex max-sm:gap-0 sm:gap-[250px] xl:gap-0 max-sm:flex-col sm:flex-row xl:flex-col">
          <h1 className='font-primaryextrabold max-sm:text-[25px] xl:text-[30px]'>IN THE BOX</h1>
            <div className='text-[#797777]'>
              <p><span className='text-[rgb(235,144,48)]'>{speaker.includes[0].quantity}x </span> {speaker.includes[0].item}</p>
              <p><span className='text-[rgb(235,144,48)]'>{speaker.includes[1].quantity}x </span> {speaker.includes[1].item}</p>
              <p><span className='text-[rgb(235,144,48)]'>{speaker.includes[2].quantity}x </span> {speaker.includes[2].item}</p>
              <p><span className='text-[rgb(235,144,48)]'>{speaker.includes[3].quantity}x </span> {speaker.includes[3].item}</p>
              <p><span className='text-[rgb(235,144,48)]'>{speaker.includes[4].quantity}x </span> {speaker.includes[4].item}</p>
            </div>
          </div>
      </div>

      {/* gallery Section */}
      <div className=' max-sm:px-5 sm:px-10 xl:px-[190px] relative flex max-sm:flex-col sm:flex-col xl:flex-col'>
        <div>
          <img src={speaker.gallery.first.desktop} alt=""className='sm:w-[277px] xl:w-[445px]'/>
        </div>
        <div className ='max-sm:py-4 sm:py-6 xl:py-8'>
          <img src={speaker.gallery.second.desktop} alt=""className='sm:w-[277px] xl:w-[445px]' />
        </div>
        <div className='sm:absolute sm:top-0 sm:right-[35px] xl:absolute xl:top-0 xl:right-[157px]'>
          <img src={speaker.gallery.third.desktop} alt="" className='sm:w-[395px] xl:w-[635px]'  />
        </div>
      </div>

      {/* also like section */}
      <div className=' max-sm:px-5 sm:px-5 xl:px-[190px]'>
        <h1 className='font-primaryextrabold text-[35px] mx-auto text-center py-[60px]'>YOU MAY ALSO LIKE</h1>
         <div className='mx-auto max-sm:flex-col sm:flex xl:flex  sm:gap-5 xl:gap-5 text-center'>
           {speaker.others.map((data, index) => {
           return (
             <div key={index}>
              <img src={data.image.desktop} alt="desktop" className='xl:w-[350px] max-sm:py-5 sm:py-5 xlpy-8' />
              <p className='pb-3 '>{data.name}</p>  
              <div className='sm:pb-[50px] xl:pb-[100px]'>
                <button className='px-2 py-2 bg-[#D87D4A] text-[#fff]'>SEE PRODUCT</button>
              </div> 
             </div>
           )
          })}
         </div>
      </div>
      <Bottom/>
    </div>
  );
}
Speakerdetail.propTypes = {
  addToCart: PropTypes.func.isRequired,
}
