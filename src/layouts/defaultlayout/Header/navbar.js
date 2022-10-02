import { Link } from "react-router-dom";
import { Fragment, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import Search from "./search";

const Navbar = ({ searchRef }) => {
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
                        console.log("toggled")
                    }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                    <li className="r-menu-item">
                        <FontAwesomeIcon icon={faUser} />
                    </li>
                    <li className="r-menu-item">
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className="cart-number">0</span>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

const MobileNavbar = ({ searchRef }) => {
    const sMenu = useRef(null);
    const arrow = useRef(null);
    const handleSubMenu = () => {
        sMenu.current.classList.toggle("active");
        arrow.current.classList.toggle("active");
    };
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
                        // search.current.classList.toggle("active");
                    }}
                >
                    <p className="menu-text">Search</p>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="menu-icon" />
                </li>
                <li className="m-menu-item">
                    <p className="menu-text">Log In</p>
                    <FontAwesomeIcon icon={faUserSolid} className="menu-icon" />
                </li>
            </ul>
            <figure className="logo-wrapper">
                <img src={logo} alt="logo" className="logo"></img>
            </figure>
            <FontAwesomeIcon icon={faCartShopping} />
            <div
                className="mobile-overlay"
                onClick={() => {
                    document.querySelector(".m-menu").classList.remove("active");
                    document.querySelector(".mobile-overlay").classList.remove("active");
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
