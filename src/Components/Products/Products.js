import { React, useEffect, useState } from 'react'
import Filter from '../Header/Filter/Filter'
import ProductCard from './ProductCard/ProductCard'
import './Products.scss'
import { HomeServices } from '../../utils/services'
import { useParams } from 'react-router-dom'


export default function Products() {

    const [products, setProducts] = useState([])

    const { category } = useParams()
    console.log(category)
    const links = [
        {
            name: 'All',
            link: '/products/all',
            action: () => {
                HomeServices.getproducts().then(res => {
                    setProducts(res)
                })
            },
            type:'filter'
        },
        {
            name: 'Women\'s',
            link: '/products/woman',
            category: 'women\'s clothing',
            action: () => {
                HomeServices.getProductbycategory(`women's clothing`).then(res => {
                    setProducts(res)
                })
            }
        },
        {
            name: 'Men\'s',
            link: '/products/men',
            category: 'men\'s clothing',
            action: () => {
                HomeServices.getProductbycategory(`men's clothing`).then(res => {
                    setProducts(res)
                })
            }
        },
        {
            name: 'Kid\'s',
            link: '/products/kids',
            action: () => {
                HomeServices.getProductbycategory(`electronics`).then(res => {
                    setProducts(res)
                })
            }
        },
        {
            name: 'Accessories',
            link: '/products/accessories',
            action: () => {
                HomeServices.getProductbycategory(`men's clothing`).then(res => {
                    setProducts(res)
                })
            }
        },
        {
            name: 'Cosmetics',
            link: '/products/cosmetics',
            action: () => {
                HomeServices.getProductbycategory(`jewelery`).then(res => {
                    setProducts(res)
                })
            }
        },
    ]

    useEffect(() => {
        if (category === undefined || category === 'all')
            HomeServices.getproducts().then(res => {
                setProducts(res)                          ///GET ALL PRODUCTS  
            })


        if (category === 'woman') {
            HomeServices.getProductbycategory(`women's clothing`).then(res => {
                setProducts(res)
            })
        }
        if (category === 'men') {
            HomeServices.getProductbycategory(`men's clothing`).then(res => {
                setProducts(res)
            })
        }

        if (category === 'kids') {
            HomeServices.getProductbycategory(`electronics`).then(res => {
                setProducts(res)
            })
        }

        if (category === 'kids') {
            HomeServices.getProductbycategory(`electronics`).then(res => {
                setProducts(res)
            })
        }

        if (category === 'accessories') {
            HomeServices.getProductbycategory(`men's clothing`).then(res => {
                setProducts(res)
            })
        }

        if (category === 'cosmetics') {
            HomeServices.getProductbycategory(`jewelery`).then(res => {
                setProducts(res)
            })
        }
    }, [])


    return (
        <div className="product_container">
            <div className="products_header">
                <h3><span>NEW</span> PRODUCT</h3>
                <Filter data={products} product={() => setProducts()} links={links} />
            </div>


            <div className="Prow1">
                {products && products.map((items, index) => (<ProductCard key={items.id} name={items.title} img={items.image} price={items.price} label={index % 3 === 0 ? "New" : ((index % 4 === 0) && (index % 3 !== 0)) ? "Out of stock" : null} lbg={index % 3 === 0 ? "#35a300" : ((index % 4 === 0) && (index % 3 !== 0)) ? "#000" : null} />))}
            </div>
        </div>
    )
}
