import React from 'react'
import ProductData from "../data.json";
// import Headphonesdetail from '../products/Headphonesdetail'



export default function Headphone() {
  const headphones = ProductData.filter(
    (headphones) => headphones.category === "headphones"
  );
  console.log(headphones);
  return (
    <div>
      <div>
        <div>
          {headphones.map((headphone) => {
            return (
              <div key={headphone.id}>
                <p>{headphone.name}</p>
                <h1>{headphone.image}</h1>
              </div>
            );

          })}
        </div>
      </div>

      
    
    </div>
  )
}
