import React from 'react'

 export const Others = ({earphone, speaker}) => {
  
    console.log(speaker);
  return (
    <div>
      <div> 
        <h1 className='py-[60px] mx-auto text-center text-[35px] font-primaryextrabold'>YOU MAY ALSO LIKE</h1>
        <div>
          <div className='flex gap-5 text-center px-[190px]'> 
            {earphone.others.map((data, index) => {
                return (
                    <div key={index} className="">
                      <div>
                        <img src={data.image.desktop} alt="mobile" className='w-[350px] py-5' />
                         <p className='pb-2'>{data.name}</p> 
                         <div className='pb-[100px]'> 
                           <button className='px-2 py-2 bg-[#D87D4A] text-[#fff]'>SEE PRODUCT</button>
                         </div>
                      </div>
                        
                    </div>
                )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

