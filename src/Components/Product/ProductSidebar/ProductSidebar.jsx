import React from 'react'
import {CategorySidebar, AllProducts} from '../index'
import './ProductSidebar.css'

const ProductSidebar = () => {
  return (
    <div className='productSidebar'>
      <CategorySidebar/>
      <AllProducts/>
    </div>
  )
}

export default ProductSidebar