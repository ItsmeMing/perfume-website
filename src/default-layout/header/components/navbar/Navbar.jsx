import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "./assets/images/logo.webp";
import "./assets/styles/Navbar.scss";
import "./assets/styles/MobileNavbar.scss";

const Navbar = ({ searchRef, authen, cart, setSearchText }) => {
    const [count, setCount] = useState(null);
    //get cart's length
    const cartCount = useSelector((state) => state.cart).cart.list.length;
    useEffect(() => {
        setCount(cartCount);
    }, [cartCount]);

    const dButton = useRef(null);
    return (
        <>
            <div className="d-menu-wrapper">
                <Link to="/products">
                    <div ref={dButton} className="d-menu">
                        PERFUMES
                        {/* <ul className="d-menu-list">
                        <Link to="/products">
                            <li className="d-menu-item">All</li>
                        </Link>
                        <li className="d-menu-item">Men</li>
                        <li className="d-menu-item">Women</li>
                        <li className="d-menu-item">Unisex</li>
                    </ul> */}
                    </div>
                </Link>
            </div>
            <Link to="/">
                <figure className="logo-wrapper">
                    <img src={logo} alt="logo" className="logo"></img>
                </figure>
            </Link>
            <div className="r-menu-wrapper">
                <ul className="r-menu">
                    <li className="r-menu-item">ABOUT</li>
                    <li
                        className="r-menu-item"
                        onClick={() => {
                            searchRef.current.classList.toggle("active");
                            authen.current.classList.remove("active");
                            cart.current.classList.remove("active");
                            setSearchText("");
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                    <li
                        className="r-menu-item"
                        onClick={() => {
                            authen.current.classList.toggle("active");
                            searchRef.current.classList.remove("active");
                            cart.current.classList.remove("active");
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li
                        className="r-menu-item"
                        onClick={() => {
                            searchRef.current.classList.remove("active");
                            authen.current.classList.remove("active");
                            cart.current.classList.toggle("active");
                        }}
                    >
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="cart-number">{count}</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

const MobileNavbar = ({ cart, setSearchText }) => {
    const toggleCart = () => {
        cart.current.classList.add("active");
    };
    return (
        <>
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                    document.querySelector(".m-menu").classList.add("active");
                    document.querySelector(".overlay").classList.add("active");
                }}
            />
            <Link to="/">
                <figure className="logo-wrapper">
                    <img src={logo} alt="logo" className="logo"></img>
                </figure>
            </Link>
            <FontAwesomeIcon icon={faCartShopping} onClick={toggleCart} />
        </>
    );
};

export { Navbar, MobileNavbar };
