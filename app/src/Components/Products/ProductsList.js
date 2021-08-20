import React, { useState } from 'react'
import productsList from '../../data/productsList';
import Product from './Product';
import './ProductsList.scss'

const ProductsList = () => {
    const [products, setProducts] = useState(productsList);
    return (
        <div className="products-list">
            {
                products.map((product, index) => <Product
                    key={index}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    category={product.category}
                    price={product.price}
                />)
            }
        </div>
    )
}

export default ProductsList
