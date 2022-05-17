import React from 'react'
import Filter from './Filter/Filter'
import './Header.scss'
import { VscSearch } from 'react-icons/vsc'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiShoppingBagLine } from 'react-icons/ri'

export default function Header() {

    const links = [
        {
            name: 'home',

        },
        {
            name: 'women\'s'
        },
        {
            name: 'men\'s'
        },
        {
            name: 'shop'
        },
        {
            name: 'pages'
        },
        {
            name: 'blog'
        },
        {
            name: 'contact'
        }

    ]
    return (
        <div className="header_container">
            <div className="header_logo">
                <h3 className="logo">Ashion</h3>
            </div>
            <div className="filter">
                <Filter links={links}  />

            </div>
            <div className="login_section">
                <p className="login_register">Login/Register</p>
                <VscSearch />

                <div className="wishlist">
                    <div className="count">
                        <p>2</p>
                    </div>
                    <AiOutlineHeart />
                </div>
                <div className="cart">
                    <div className="count">
                        <p>2</p>
                    </div>
                    <RiShoppingBagLine />

                </div>

            </div>
        </div>
    )
}
