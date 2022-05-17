import React from 'react'
import CategoryDisplay from '../CategoryDisplay/CategoryDisplay'
import Header from '../Header/Header'
import Products from '../Products/Products'
import './Home.scss'

export default function Home() {
    return (
        <div className="home">
            <Header />
            <hr style={{
                color: '#f7f7f7',
                backgroundColor: '#f7f7f7',
                height: '4.3rem'
            }} />
            <CategoryDisplay />
            <div className="product_display">
                <Products />
            </div>
        </div>
    )
}
