import { useState, Fragment } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import logo from "./assets/images/logo.webp";
import "./Header.scss";

function Header() {
    return (
        <Fragment>
            <header className="header">
                <Container className="container g-0">
                    <section className="topnav">
                        <p className="discount">
                            Get up to <strong>20$ OFF</strong>
                            <span className="dc-details">See details</span>
                        </p>
                        <p className="fs-condition">Free shipping on 3+ items</p>
                    </section>
                    <nav className="navbar p-0">
                        <p className="d-menu">PERFUMES</p>
                        <figure className="logo-wrapper">
                            <img src={logo} alt="logo" className="logo"></img>
                        </figure>
                        <ul className="r-menu">
                            <li className="r-menu-item">ABOUT</li>
                            <li className="r-menu-item">
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
                    </nav>
                </Container>
            </header>
        </Fragment>
    );
}

export default Header;
