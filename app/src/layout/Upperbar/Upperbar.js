import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Upperbar.scss";

const Upperbar = () => {
    return (
        <section className="ub hide-for-mobile">
            <div className="ub-content">
                <ul className="ub-content__contact">
                    <li>
                        <FaPhoneAlt className="icon" />
                        +212 4114 1524
                    </li>
                    <li>
                        <MdEmail className="icon" />
                        zwinin.shop@gmail.com
                    </li>
                </ul>

                <ul className="ub-content__cta">
                    <Link to="/login" className="link">
                        <li>Sign-In</li>
                    </Link>
                    <Link to="/create-account" className="link">
                        <li>create your account</li>
                    </Link>
                </ul>
            </div>
        </section>
    );
};

export default Upperbar;
