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
import logo from "./assets/images/logo.webp";

const Navbar = ({ search }) => {
    const dButton = useRef(null);
    const dMenu = useRef(null);
    return (
        <Fragment>
            <p
                ref={dButton}
                className="d-menu"
                onClick={() => {
                    dButton.current.classList.toggle("active");
                    dButton.current.style.pointerEvents = "none";
                    setTimeout(() => {
                        dButton.current.removeAttribute("style");
                    }, 1000);
                    if (dMenu.current.classList.contains("active")) {
                        dMenu.current.removeAttribute("style");
                        setTimeout(() => {
                            dMenu.current.classList.remove("active");
                        }, 400);
                    } else {
                        setTimeout(() => {
                            dMenu.current.classList.add("active");
                        }, 400);
                        setTimeout(() => {
                            dMenu.current.style.zIndex = "999";
                        }, 600);
                    }
                }}
            >
                PERFUMES
            </p>
            <ul ref={dMenu} className="d-menu-list">
                <li className="d-menu-list-item">All</li>
                <li className="d-menu-list-item">Women</li>
                <li className="d-menu-list-item">Men</li>
                <li className="d-menu-list-item">Unisex</li>
            </ul>
            <figure className="logo-wrapper">
                <img src={logo} alt="logo" className="logo"></img>
            </figure>
            <ul className="r-menu">
                <li className="r-menu-item">ABOUT</li>
                <li className="r-menu-item">
                    <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        onClick={() => {
                            search.current.classList.toggle("active");
                        }}
                    />
                </li>
                <li className="r-menu-item">
                    <FontAwesomeIcon icon={faUser} />
                </li>
                <li className="r-menu-item">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="cart-number">0</span>
                </li>
            </ul>
        </Fragment>
    );
};

const MobileNavbar = () => {
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
                <li className="m-menu-item">
                    <p className="menu-text">Perfumes</p>
                    <FontAwesomeIcon icon={faCaretDown} className="menu-icon" />
                </li>
                <li className="m-menu-item">
                    <ul className="s-menu">
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
                <li className="m-menu-item">
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
                }}
            ></div>
        </Fragment>
    );
};

export { Navbar, MobileNavbar };
