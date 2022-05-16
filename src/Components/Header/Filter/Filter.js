import React, { useState } from 'react'
import './Filter.scss'

export default function Filter() {
    const [selected, setSelected] = useState('Home')
    return (
        <div className="filter_container">
            <p onClick={() => { setSelected('Home') }} className={selected === 'Home' ? "selected" : null}>HOME</p>
            <p onClick={() => { setSelected('Women') }} className={selected === 'Women' ? "selected" : null}>WOMEN'S</p>
            <p onClick={() => { setSelected('Men') }} className={selected === 'Men' ? "selected" : null}>MEN'S</p>
            <p onClick={() => { setSelected('Shop') }} className={selected === 'Shop' ? "selected" : null}>SHOP</p>
            <p onClick={() => { setSelected('Page') }} className={selected === 'Page' ? "selected" : null}>PAGES</p>
            <p onClick={() => { setSelected('Blog') }} className={selected === 'Blog' ? "selected" : null}>BLOG</p>
            <p onClick={() => { setSelected('Contact') }} className={selected === 'Contact' ? "selected" : null}>CONTACT</p>
        </div>
    )
}
