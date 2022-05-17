import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Filter.scss'

export default function Filter({links}) {
const [selected,setSelected] = useState(links[0].name)



    return (
        <div className="filter_container">
        {links && links.map((items,index)=>(
                <Link className={selected ===  items.name ? 'selected' : 'null'  } to={`${(links.link === '' )? items.link :''}`} onClick={()=>{items.action();setSelected(`${items.name}`)}} >{items.name}</Link>))}
        </div>
    )
}
