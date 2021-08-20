import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { IoMdArrowDropdown, IoMdClose } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { FaBars, FaShoppingCart } from 'react-icons/fa'
import { HiUserCircle } from 'react-icons/hi'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { GrLanguage } from 'react-icons/gr'
import Maroc from '../../assets/maroc.svg'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import './Navbar.scss'

const Navbar = () => {
    const [navSidebar, setNavSidebar] = useState(false);

    const navToggle = () => {
        setNavSidebar(prev => !prev)
    }

    const [{ basket }] = useStateValue();

    return (
        <header className="nav">
            <div className="nav-left">
                <div className={`nav-left-sidebar ${navSidebar ? 'active' : ''}`}>
                    <FaBars className="nav-left-sidebar__toggleIcon" onClick={navToggle}/>
                    {/* Sidebar Content */}
                    <div className="nav-left-sidebar__content">
                        {/* Close Icon */}
                        <div className="close" onClick={navToggle}>
                            <IoMdClose  className="close-icon" />
                        </div>

                        {/* user-Cta */}
                        <Link to="/login">
                            <ul className="user">
                                <li className="user-img">
                                    <HiUserCircle />
                                </li>
                                <li className="user-name">
                                    <h2>Hello, Sign in</h2>
                                </li>
                            </ul>
                        </Link>

                        {/* categories */}
                        <div className="categories">
                            <h3>shop by department</h3>
                            <ul>
                                <li>Beauty</li>
                                <li>Fashion</li>
                                <li>Home & Kitchen</li>
                                <li>Computers & Accessories</li>
                                <li>Toys & Games</li>
                                <li>Phones & Accessories</li>
                            </ul>
                        </div>

                        {/* help & settings */}
                        <div className="h-s">
                            <h3>help & settings</h3>
                            <ul>
                                <li>your account</li>
                                <li id="lang">
                                    <GrLanguage className="icon" /><span>english</span><IoMdArrowDropdown />
                                </li>
                                <li id="co">
                                    <img src={Maroc} alt=""/> maroc
                                </li>
                                <li>customer service</li>
                                <Link to="/login">
                                    <li>sign in</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="overlay"></div>
                </div>
                <Link to="/">
                    <img src={Logo} alt="zwinin" className="nav-left-logo"/>
                </Link>
            </div>

            <div className="nav-search">
                <div className="nav-search__category">
                    all<IoMdArrowDropdown className="icon" />
                </div>
                <input type="text" className="nav-search__input" placeholder="Search For Anything" />
                <div className="nav-search__icon">
                    <BsSearch />
                </div>
            </div>

            <nav className="nav-cta">
                <ul className="nav-cta__links">
                    <li>
                        <HiUserCircle className="icon" /><span>my account</span><IoMdArrowDropdown />
                    </li>
                    <li>
                        <AiFillQuestionCircle className="icon" /><span>helps</span><IoMdArrowDropdown />
                    </li>
                    <Link to="/checkout" className="link">
                        <li className="shopIcon">
                            <FaShoppingCart className="icon" /><span>{basket?.length}</span>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
