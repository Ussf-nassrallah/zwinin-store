import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import './CategoryCard.scss'

const CategoryCard = ({ id, img, title }) => {
    return (
        <div className="category">
            <h3 className="category-title">{title}</h3>
            <img src={img} className="category-img" alt={title}/>
            <a href="/" className="category-link">shop now <RiArrowRightSLine className="icon" /></a>
        </div>
    )
}

export default CategoryCard
