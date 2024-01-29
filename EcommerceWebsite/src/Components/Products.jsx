import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import './Product.css'

const Products = () => {
  return (
    <div id='products'>
         {popularProducts.map((item)=>(
          <Product item={item} key={item.id}/>
        
        ))}
    </div>
  )
}

export default Products