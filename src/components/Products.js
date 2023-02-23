import React from 'react'
import Product from './Product'
const ReUsableProducts = () => {


//   import { useState, useEffect } from 'react';

// const Products = () => {

// const [products, setProducts] = useState([]);
// useEffect(() => {
//    fetch('/api/products')
//    .then(response => response.json())
//    .then(products => {
//     setProducts(products);
//    });
// }, []);


  return (
    <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold my-3'>Products</h1>
        <div className='grid grid-cols-5 gap-x-24 gap-y-9 my-1'>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
  )
}

export default ReUsableProducts;
