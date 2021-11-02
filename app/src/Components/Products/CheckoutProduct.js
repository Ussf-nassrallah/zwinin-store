import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckoutProduct.scss";

const CheckoutProduct = ({ id, img, title, category, price }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // Remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img src={img} className="checkoutProduct-img" alt={title} />
            <div className="checkoutProduct-info">
                <p className="checkoutProduct-info__title">{title}</p>
                <p className="checkoutProduct-info__category">{category}</p>
                <p className="checkoutProduct-info__price">{price}Dh</p>
                <button className="remove-btn" onClick={removeFromBasket}>
                    Remove From Shopping Basket
                </button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
