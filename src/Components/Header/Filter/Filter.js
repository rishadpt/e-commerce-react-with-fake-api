import React from 'react'
import { Link } from 'react-router-dom'
import './Filter.scss'

export default function Filter({ links,action }) {

const handleSelect = (event)=>{
    action()
    const active = document.querySelector('.selected')
    console.log(active, 'active')
    if(active){
        active.classList.remove('selected')
        event.target.classList.add('selected')
    }
    else {
        event.target.classList.add('selected')
    }
}
    return (
        <div className="filter_container">
            {links && links.map((item, index) => (
                <Link to={`/${item.name}`} onClick={handleSelect} key={index}>{item.name}</Link>))}
        </div>
    )
}
