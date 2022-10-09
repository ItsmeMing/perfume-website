import { Fragment, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./cart/Cart";
import {
    faMagnifyingGlass,
    faCartShopping,
    faBars,
    faSprayCanSparkles,
    faCircleInfo,
    faUser as faUserSolid,
    faCaretDown,
    faPerson,
    faPersonDress,
    faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/images/logo.webp";


const Navbar = ({ searchRef, auth, count }) => {
    const dButton = useRef(null);
    return (
        <Fragment>
            <div className="d-menu-wrapper">
                <div ref={dButton} className="d-menu">
                    PERFUMES
                    <ul className="d-menu-list">
                        <Link to="/products">
                            <li className="d-menu-item">
                                All
                            </li>
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
                    <li className="r-menu-item" onClick={() => {
                        searchRef.current.classList.toggle("active")
                    }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                    <li className="r-menu-item" onClick={() => {
                        auth.current.classList.toggle("active")
                    }}>
                        <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li className="r-menu-item">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="cart-number">{count}</span>
                        <Cart></Cart>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

const MobileNavbar = ({ searchRef, auth }) => {
    const sMenu = useRef(null);
    const arrow = useRef(null);
    const handleSubMenu = () => {
        sMenu.current.classList.toggle("active");
        arrow.current.classList.toggle("active");
    };

    const cart = useRef(null)
    const toggleCart = () => {
        cart.current.classList.add("active")
    }
    return (
        <Fragment>
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                    document.querySelector(".m-menu").classList.add("active");
                    document.querySelector(".mobile-overlay").classList.add("active");
                }}
            />
            <ul className="m-menu">
                <li className="m-menu-item" id="sub">
                    <div className="menu-text" onClick={handleSubMenu}>
                        Perfumes
                        <FontAwesomeIcon ref={arrow} icon={faCaretDown} className="menu-icon" />
                    </div>
                    <ul ref={sMenu} className="s-menu">
                        <li className="s-menu-item">
                            <p className="menu-text">All</p>
                            <FontAwesomeIcon icon={faSprayCanSparkles} className="menu-icon" />
                        </li>
                        <li className="s-menu-item">
                            <p className="menu-text">Men</p>
                            <FontAwesomeIcon icon={faPerson} className="menu-icon" />
                        </li>
                        <li className="s-menu-item">
                            <p className="menu-text">Women</p>
                            <FontAwesomeIcon icon={faPersonDress} className="menu-icon" />
                        </li>
                        <li className="s-menu-item">
                            <p className="menu-text">Unisex</p>
                            <FontAwesomeIcon icon={faQuestion} className="menu-icon" />
                        </li>
                    </ul>
                </li>
                <li className="m-menu-item">
                    <p className="menu-text">About</p>
                    <FontAwesomeIcon icon={faCircleInfo} className="menu-icon" />
                </li>
                <li
                    className="m-menu-item"
                    onClick={() => {
                        document.querySelector(".m-menu").classList.remove("active");
                        searchRef.current.classList.toggle("active");
                    }}
                >
                    <p className="menu-text">Search</p>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="menu-icon" />
                </li>
                <li className="m-menu-item" onClick={() => {
                    auth.current.classList.toggle("active")
                    setTimeout(() => {
                        document.querySelector(".m-menu").classList.remove("active");
                        document.querySelector(".mobile-overlay").classList.remove("active");
                    }, 1000);
                }}>
                    <p className="menu-text">Log In</p>
                    <FontAwesomeIcon icon={faUserSolid} className="menu-icon" />
                </li>
            </ul>
            <figure className="logo-wrapper">
                <img src={logo} alt="logo" className="logo"></img>
            </figure>
            <FontAwesomeIcon icon={faCartShopping} onClick={toggleCart} />
            <Cart cart={cart}></Cart>
            <div
                className="mobile-overlay"
                onClick={() => {
                    document.querySelector(".m-menu").classList.remove("active");
                    document.querySelector(".mobile-overlay").classList.remove("active");
                    searchRef.current.classList.remove("active");
                    if (sMenu.current.classList.contains("active")) {
                        sMenu.current.classList.remove("active");
                        arrow.current.classList.remove("active");
                    }
                }}
            ></div>
        </Fragment>
    );
};

export { Navbar, MobileNavbar };
