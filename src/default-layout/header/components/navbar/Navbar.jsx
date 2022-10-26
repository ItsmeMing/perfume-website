import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "./assets/images/logo.webp";
import "./assets/styles/Navbar.scss";
import "./assets/styles/MobileNavbar.scss";

const Navbar = ({ searchRef, authen, cart }) => {
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
                <div ref={dButton} className="d-menu">
                    PERFUMES
                    <ul className="d-menu-list">
                        <Link to="/products">
                            <li className="d-menu-item">All</li>
                        </Link>
                        <li className="d-menu-item">Men</li>
                        <li className="d-menu-item">Women</li>
                        <li className="d-menu-item">Unisex</li>
                    </ul>
                </div>
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
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                    <li
                        className="r-menu-item"
                        onClick={() => {
                            authen.current.classList.toggle("active");
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li
                        className="r-menu-item"
                        onClick={() => {
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

const MobileNavbar = ({ cart }) => {
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
            <figure className="logo-wrapper">
                <img src={logo} alt="logo" className="logo"></img>
            </figure>
            <FontAwesomeIcon icon={faCartShopping} onClick={toggleCart} />
        </>
    );
};

export { Navbar, MobileNavbar };
