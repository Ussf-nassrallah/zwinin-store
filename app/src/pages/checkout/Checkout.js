import React from 'react'
import CheckoutProduct from '../../Components/Products/CheckoutProduct';
import { useStateValue } from '../../StateProvider'
import './Checkout.scss'

const Checkout = () => {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            {
                basket?.length === 0 ? (
                    <div className="checkout-msg text-center">
                        <h2>Your Shopping Basket is Empty</h2>
                        <p>
                            You Have no items in your basket. To buy one or "Add to cart" Next to the item.
                        </p>
                    </div>
                ) : (
                    <section>
                        <div className="checkout-msg">
                            <h2>Your Shopping Basket</h2>
                        </div>
                        {/* List out all of the checkout products */}
                        {
                            basket?.map((item, index) => <CheckoutProduct
                                key={index}
                                id={item.id}
                                img={item.img}
                                title={item.title}
                                category={item.category}
                                price={item.price}
                            />)
                        }
                    </section>
                )
            }
        </div>
    )
}

export default Checkout
