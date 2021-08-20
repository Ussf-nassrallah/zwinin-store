import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useStateValue } from '../../StateProvider'
import './Product.scss'

const Product = ({ id, img, title, category, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                img: img,
                title: title,
                category: category,
                price: price,
            }
        })
    };

    return (
        <div className="product">
            <img src={img} className="product-img" alt={title}/>
            <h3 className="product-title">
                {title}
            </h3>
            <p className="product-category">
                {category}
            </p>
            <p className="product-price">
                {price}.00 Dhs
            </p>
            <button className="product-ctaBtn" onClick={addToBasket}>
                <FiShoppingCart className="icon" />Add to Shopping Basket
            </button>
        </div>
    )
}

export default Product
