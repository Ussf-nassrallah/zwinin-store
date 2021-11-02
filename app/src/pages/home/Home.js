import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import slides from "./slides";
import items from "../../data/categories";
import servicesItems from "../../data/services";
import "./Home.scss";
import CategoryCard from "../../Components/CategoryCard";
import ServiceItem from "../../Components/ServiceItem";
import ProductsList from "../../Components/Products/ProductsList";

const Home = () => {
    const [i, setI] = useState(0);

    const goRight = () => {
        i === -100 * (slides.length - 1) ? setI(0) : setI(i - 100);
    };

    const goLeft = () => {
        i === 0 ? setI(-100 * (slides.length - 1)) : setI(i + 100);
    };

    const [categories, setCategories] = useState(items);

    const [services, setServices] = useState(servicesItems);

    return (
        <div className="home">
            <section className="slider">
                {slides.map((slide, index) => {
                    return (
                        <div
                            key={index}
                            className="slide"
                            style={{ transform: `translateX(${i}%)` }}
                        >
                            <img src={slide} alt="" />
                        </div>
                    );
                })}

                <div className="slide-control">
                    <button onClick={goLeft}>
                        <MdKeyboardArrowLeft className="arrow arrow-left" />
                    </button>
                    <button onClick={goRight}>
                        <MdKeyboardArrowRight className="arrow arrow-right" />
                    </button>
                </div>
            </section>

            <section className="categories">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        title={category.title}
                        img={category.img}
                    />
                ))}
            </section>

            <section className="services">
                <h2>our services</h2>
                <div className="services-items">
                    {services.map((service) => (
                        <ServiceItem
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                        />
                    ))}
                </div>
            </section>

            <section className="products">
                <ProductsList />
            </section>
        </div>
    );
};

export default Home;
