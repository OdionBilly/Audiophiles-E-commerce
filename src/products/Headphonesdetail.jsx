import React from 'react'
import ProductData from "../data.json";

export default function Headphonesdetail() {
  // console.log(headphones)

  const headphone = ProductData.filter((headphones) => headphones.category ==='headphones');
  console.log(headphone)

  // destructure headphones
  const { id,name,image, description,} = headphone;
  

  return (
    <div>
      <div>
        <div>
          {headphone.map((item) => {
            return (
              <div key={item.id}></div>
            )
          })
          
          }

        
  
        
        </div>
      </div>
    </div>
  );
}
