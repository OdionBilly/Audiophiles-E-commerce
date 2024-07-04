import React from 'react'
import headset from '../mobile-image/Group 6.png'
import speaker from '../mobile-image/Group 7.png'
import headphone from '../mobile-image/Group 8.png'
import speakers from '../mobile-image/mobile-speakerB.png'
import bitmap from '../mobile-image/mobile-Bitmapc.png'
import bitmap1 from '../mobile-image/Bitmap-tablet.png'
import bitmap2 from '../mobile-image/Bitmap-1.png'
import HeadphoneB from '../mobile-image/mobile-headphoneB.png'
import bitmapB from '../mobile-image/mobile-BitmapB.png'
import bitmapc from '../mobile-image/Bitmap-b-tablet.png'
import bitmapd from '../mobile-image/Bitmap-2.png'

export default function Cart() {
  return (
    <div className=' overflow-hidden'>
      <div className='md:px-[20px] lg:px-[13%] md:flex gap-5 lg:flex py-5 mb-8'>

            <div className='max-sm:m-5'>
               <img className='md:w-auto md:h-auto lg:w-[350px] lg:h-[284px]' src={headset} alt="headset-image" />
            </div>
            <div className='max-sm:m-5 lg:w-[350px] lg:h-[284px]'>
               <img className='md:w-auto md:h-auto lg:w-[350px] lg:h-[284px]' src={speaker} alt="speaker-image" />
            </div>
            <div className='max-sm:m-5 lg:w-[350px] lg:h-[284px]'>
              <img className='md:w-auto md:h-auto lg:w-[350px] lg:h-[284px]' src={headphone} alt="headphone-image" />
            </div>
      </div>
           
           {/* cart section 2 */}


      <div className='text-[#f1f1f1] text-center bg-[#D87D4A] py-10 lg:flex lg:h-[530px] lg:mx-[13%]'>
        <div className='px-[100px] py-5'>
          <img className='md:ml-[30%] md:py-10 md:w-[220px] lg:w-[380px]' src={speakers} alt="speaker-image" />
        </div>
        <div className=''>
          <h2 className='sm:w-[280px] sm:h-[80px] leading-10 text-[36px] font-primarybold md:leading-[60px] md:w-[261px] md:h-[116px] md:py-4 md:ml-[259px] md:text-[56px] lg:ml-[200px] lg:mt-[100px] lg:text-left'>ZX9 <br />SPEAKER</h2>
          <p className=' ml-[50px] w-[280px] h-[75px] text-[15px] py-5 md:w-[349px] md:ml-[220px] md:py-10 lg:text-left lg:ml-[200px]'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <button className='bg-[#101010] w-[160px] h-[48px] text-[13px] m-12 hover:bg-[#4c4c4c]'type="button">SEE PRODUCT</button>
        </div> 
      </div>

      {/* Cart section 3 */}
      <div className='bg-[#dedddd] lg:bg-[white] w-[375px] lg:w-[1110px] h-[320px] flex mt-[40px] mx-2 px-4 md:w-auto lg:mx-[13%] lg:mt-[80px]'>
        <div className='w-[202px] h-[38px] pt-[50px] pl-[20px] lg:pl-auto'>
          <h3 className='w-[202px] text-[28px] font-primarymedium py-4'>ZX7 SPEAKER</h3>
          <button className='text-[13px] border-2 border-black px-4 py-2 lg:px-6 hover:bg-[#101010] hover:text-[#f1f1f1] ' type="button">SEE PRODUCT</button>
        </div>
        <div className=''>
          <img className='sm:hidden'src={bitmap} alt="bitmap-mobile-image" />
          <img className='max-md:hidden lg:hidden md:ml-[100px] md:pl-10'src={bitmap1} alt="tablet-image" />
          <img className='max-lg:hidden lg:ml-[190px]'src={bitmap2} alt="desktop-image" />
        </div>

      </div>

      {/* Cart Section 4 */}
      <div>
        <div className='mt-[40px] md:flex gap-1 lg:px-[10%] lg:mt-[50px]'>
          <div className='mx-2 w-[378px] lg:w-[540px]'>
            <img className='w-[378px] md:h-[320px] lg:w-[540px]' src={HeadphoneB} alt="headphones-image" />
          </div>
          <div className='bg-[#dedddd] mt-[40px] md:mt-[1px] mx-2 w-[378px] h-[220px] pt-[30px] px-8 md:h-[320px] md:pt-[70px] lg:w-[540px]'>
            <h2 className='text-[28px] font-primarymedium py-4'>YX1 EARPHONES</h2>
            <button className='text-[13px] border-2 border-black px-4 py-2 hover:bg-[#101010] hover:text-[#f1f1f1]' type="button">SEE PRODUCT</button>
          </div>
        </div>
      </div>
      
      {/* Cart section 5 */}
      <div className='lg:flex flex-row-reverse lg:w-[1445px] lg:px-[13%] lg:mt-8'>
        <div className='mx-2 text-center mt-10 md:mx-2]'>
          <img className='sm:hidden w-[375px]' src={bitmapB} alt="mobile-image" />
          <img className='max-md:hidden lg:hidden md:w-[788px]'src={bitmapc} alt="tablet-image" />
          <img className='max-lg:hidden 'src={bitmapd} alt="desktop-image" />
        </div>
        <div className='mx-2 mt-8 lg:mt-[150px]'>
          <h1 className='py-4 px-4 ml-2 leading-10 text-[28px] font-primarymedium w-[327px] md:w-[573px] md:text-[40px] md:text-center md:mx-[90px]
                         lg:w-[445px] lg:text-left lg:ml-[-100px]'>
           BRINGING YOU THE <span className='text-[#D87D4A]'>BEST</span> AUDIO GEAR</h1>
          <p className='text-[15px] font-primaryregular w-[327px] mx-4 h-[250px] mt-2 md:w-[573px] md:text-center md:mx-[120px]
                       lg:w-[410px] lg:text-left lg:px- lg:ml-[-80px]'>
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, 
          speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you 
          to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic 
          people who make Audiophile the bestplace to buy your portable audio equipment.
          </p>
        </div>
      </div>
       


    </div>
  )
}
