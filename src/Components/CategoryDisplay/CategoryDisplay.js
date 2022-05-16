import React from 'react'
import './CategoryDisplay.scss'
import MainContainer from './MainContainer/MainContainer'
import SubContainer from './SubContainer/SubContainer'

export default function CategoryDisplay() {
    return (
        <div className="category_display_container">

            <MainContainer />


            <div className="row">
                <SubContainer image="/images/Cards/mens.png" title="Men's fashion" bg="#bce3d6" />
                <SubContainer image="/images/Cards/mens.png" title="Cosmetics" bg="#fcdbe6" />
            </div>
            <div className="row">
                <SubContainer image="/images/Cards/kids.png" title="kid's fashion" bg="#d8d3f1" />
                <SubContainer image="/images/Cards/mens.png" title="Accessories" bg="#cee1f5" />
            </div>
        </div>
    )
}
