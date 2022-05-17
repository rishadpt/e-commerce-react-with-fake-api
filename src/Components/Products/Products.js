import { React, useEffect, useState } from 'react'
import Filter from '../Header/Filter/Filter'
import ProductCard from './ProductCard/ProductCard'
import './Products.scss'
import { HomeServices } from '../../utils/services'

export default function Products() {

    const [products, setProducts] = useState([])

    const links = [
        {
            name: 'All',

        },
        {
            name: 'Women\'s'
        },
        {
            name: 'Men\'s'
        },
        {
            name: 'Kid\'s'
        },
        {
            name: 'Accessories'
        },
        {
            name: 'Cosmetics'
        },
    ]
    // const action = [
    //     {
    //         method:getMencategory
    //     },
    //     {

    //     }
    // ]

   

    const getMencategory = () => {

        HomeServices.getMenClothingCategories().then(res => {
            setProducts(res)
        })
    }

    

    useEffect(() => {
        HomeServices.getAllproduct().then(res => {
            setProducts(res)                            ///GET ALL PRODUCTS  
        })
    }, [])

    console.log(products)

    return (
        <div className="product_container">
            <div className="products_header">
                <h3><span>NEW</span> PRODUCT</h3>
                <Filter action={getMencategory} links={links} />
            </div>


            <div className="Prow1">
                {products && products.map((items, index) => (<ProductCard key={items.id} name={items.title} img={items.image} price={items.price} label={index % 3 === 0 ? "New" : ((index % 4 === 0) && (index % 3 !== 0)) ? "Out of stock" : null} lbg={index % 3 === 0 ? "#35a300" : ((index % 4 === 0) && (index % 3 !== 0)) ? "#000" : null} />))}
            </div>
        </div>
    )
}
