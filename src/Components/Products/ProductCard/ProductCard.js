import React from 'react'
import './ProductCard.scss'
import {AiFillStar} from 'react-icons/ai'

export default function ProductCard() {
  return (
    <div className="product_card_container">
        <div className="image_container">
            <div style={{ background:'#35a300'}} className="label_container">
                <small>New</small>
                </div>
            <img src="/images/Cards/womens.png" alt="" />
        </div>
        <div className="pname">
        <small>Button bleeved dd</small>
        <div className="star_container">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </div>
        <small className="price">$ 80.0</small>
        </div>
    
    </div>
  )
}
