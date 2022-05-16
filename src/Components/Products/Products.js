import React from 'react'
import Filter from '../Header/Filter/Filter'
import ProductCard from './ProductCard/ProductCard'
import './Products.scss'

export default function Products() {
  return (
    <div className="product_container">
        <div className="products_header">
            <h3><span>NEW</span> PRODUCT</h3>
            <Filter first="All" second="Women's"  third="Men's" four="Kid's" five="Accessories" six="Cosmetics"/>
        </div>
        <div className="Prow1">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
        <div className="Prow1">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        </div>
    </div>
  )
}
