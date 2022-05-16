import React from 'react'
import './SubContainer.scss'

export default function SubContainer({bg,title,image}) {
  return (
    <div style={{backgroundColor:`${bg}`}} className="subcontainer_container">
        <div className="subcontainer_title_container">
            <h3>{title}</h3>
            <small>358 Items</small>
            <p>SHOP NOW</p>
        </div>
        <img src={image} alt="" />
    </div>
  )
}
