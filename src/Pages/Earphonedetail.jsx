// import React from 'react'\
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {useState, useEffect } from 'react'
import ProductData from '../../public/data.json'
import { BsPlus, BsDash } from 'react-icons/bs'
// import Others from '../components/Others'
import Bottom from '../components/Bottom'
import { Others } from '../components/Others';
// import { GrBottomCorner } from 'react-icons/gr'



export default function Earphonedetail({addToCart}) {

  const {earphoneId} = useParams();
  const [earphone, setEarphone] = useState(null);
  const [quantity, setQuantity] = useState(0);

  // increase product Quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  // decrease product quantity
  const decreaseQuantity = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  // handle cart
  const handleAddToCart = () => {
    if(quantity > 0 && earphone) {
      addToCart({
        id: earphone.id,
        name: earphone.name,
        price: earphone.price,
        quantity: quantity,
        image: earphone.image
      });
      setQuantity(0);
    }
  }

  useEffect(() => {
    const foundProduct = ProductData.find(
      (item) => item.id === parseInt(earphoneId, 10) 
    );
    setEarphone(foundProduct);

  },[earphoneId]);

  if(!earphone){
    return <div>Loading...</div>
  }

  return (
    <div>
      <Link to={`/earphones`}>
        <button className=" px-6 md:px-12 xl:px-[110px] p-4">Back</button>
      </Link>

      <div className="px-6 md:px-12p xl:px-[110px] flex max-md:flex-col md:gap-[60px] xl:gap-10">
        <div>
          <img
            src={earphone.image}
            alt={earphone.name}
            className="max-md:w-[381px] md:h-[481px] xl:w-[540px] xl:h-[560px]"
          />
        </div>

        <div className=" md:mt-5 xl:w-[445px] py-5 xl:mt-[70px]  xl:ml-10">
          <h1 className="pb-5 text-[#D87D4A] font-thin">NEW PRODUCT</h1>
          <h2 className="max-md:w-[202px] mb-5 uppercase font-primarybold max-sm:text-[28px] text-[40px] leading-8 xl:leading-10">
            {earphone.name}
          </h2>
          <p className=" md:w-[430px] font-primaryregular">
            {earphone.description}
          </p>

          <p> $ {earphone.price}</p>

          {/* quantity and adding to cart function */}
          <div className="mt-2 flex gap-2">
            <div className="flex justify-between items-center bg-gray-400 w-[80px]">
              <div onClick={increaseQuantity} className="px-2">
                {<BsPlus />}
              </div>
              <div>{quantity}</div>
              <div onClick={decreaseQuantity} className="px-2">
                {<BsDash />}
              </div>
            </div>

            <button
            onClick={handleAddToCart}
             className=" bg-[#D87D4A] hover:bg-[#ec9867] text-[#fff] px-4 py-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Feature */}
      <div className='flex max-sm:flex-col sm:flex-col xl:flex-row'>
          <div className='py-10 max-sm:px-5 sm:px-10 xl:px-[190px]'>
             <h1 className='font-primaryextrabold max-sm:text-[25px] xl:text-[30px]'>FEATURES</h1>
             <p className='xl:w-[550px] py-4 text-[#797777]'>{earphone.features}</p>
          </div> 

          <div className='py-10 max-sm:px-5 sm:px-10 xl:px-[10px] flex max-sm:gap-0 sm:gap-[250px] xl:gap-0 max-sm:flex-col sm:flex-row xl:flex-col'>
            <h1 className='font-primaryextrabold max-sm:text-[25px] xl:text-[30px]'>IN THE BOX</h1>
            <div className='text-[#797777]'>
             <p> <span className='text-[rgb(235,144,48)] '>
                 {earphone.includes[0].quantity}x </span>  
                 {earphone.includes[0].item}</p>
             <p><span className='text-[rgb(235,144,48)]'> {earphone.includes[1].quantity}x </span>
                 {earphone.includes[1].item}
             </p>
             <p><span className='text-[rgb(235,144,48)]'>{earphone.includes[2].quantity}x </span> {earphone.includes[2].item}</p>
             <p><span className='text-[rgb(235,144,48)]'> {earphone.includes[3].quantity}x </span>  {earphone.includes[3].item}</p>
            </div>
          </div>
        </div>

        {/* Gallery section */}
        <div className=' max-sm:px-5 sm:px-10 xl:px-[190px] relative flex max-sm:flex-col sm:flex-col xl:flex-col'>
          <div className=''>
            <img src={earphone.gallery.first.desktop} alt=""className='sm:w-[277px] xl:w-[445px]' />
          </div>
          <div className=' max-sm:py-4 sm:py-6 xl:py-8'>
            <img src={earphone.gallery.second.desktop} alt="pics"className='sm:w-[277px] xl:w-[445px]' />
          </div>
          <div className='sm:absolute sm:top-0 sm:right-[35px] xl:absolute xl:top-0 xl:right-[157px]'>
            <img src={earphone.gallery.third.desktop} alt="" className='sm:w-[395px] xl:w-[635px]' />
          </div>
        </div>

        
         <Others earphone={earphone}/>

      <Bottom/>
    </div>
  );

 
}
Earphonedetail.propTypes = {
  addToCart: PropTypes.func.isRequired,
}


