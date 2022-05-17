import React from 'react'
import './ProductCard.scss'
import {AiFillStar} from 'react-icons/ai'

export default function ProductCard({name,price,label,img,lbg}) {
  return (
    <div className="product_card_container">
        <div className="image_container">
            <div style={{ background:`${lbg}`}} className="label_container">
                <small>{label}</small>
                </div>
            <img src={img} alt="" />
        </div>
        <div className="pname">
        <small>{name}</small>
        <div className="star_container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <small className="price">$ {price}</small>
        </div>
    
    </div>
  )
}
