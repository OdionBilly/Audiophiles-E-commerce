import React from 'react'
import productData from '../data.json'

export const Details_headphones = () => {
  
  const headphones = productData.filter(product => product.category === 'headphones') 
  console.log(headphones[2].categoryImage)
  

  return (
    <div>
      <h1>go back</h1>
      <div>
        {headphones.map((headphone) => {
          return (
            <div key={headphone.id}>
              <p>{headphone.description}</p>
              <div className=''>
                <img src={headphone.categoryImage.desktop} alt="headphones" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
