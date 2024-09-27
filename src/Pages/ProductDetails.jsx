import React from 'react'
// import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import data from '../data.json'
import Headphone from './Headphone';

export const ProductDetails = () => {
    const {Id } = useParams ();
    console.log(Id);


  return (
    <div>
        <h1>Product Details</h1>
        

    </div>
  )
}
