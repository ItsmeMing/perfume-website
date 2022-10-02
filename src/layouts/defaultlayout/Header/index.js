import { Fragment, useState, useEffect, useRef } from "react";
import Btn from "../../../global-components/btn/Btn";
import { Container } from "react-bootstrap";
import "./Header.scss";
import { Navbar, MobileNavbar } from "./navbar";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./search";

function Header() {

    //switch to navbar/mobile-navbar base on screen's width
    const [mnav, setMnav] = useState(false);
    useEffect(() => {
        const handleMobileNav = () => {
            if (window.innerWidth <= 575.98) setMnav(true);
            else setMnav(false);
        };
        handleMobileNav();
        window.addEventListener("resize", handleMobileNav);

        // cleanup function
        return () => {
            window.removeEventListener("resize", handleMobileNav);
        };
    }, []);

    //add bottom border to header when scrolling
    const header = useRef(null);
    useEffect(() => {
        const handleHeader = () => {
            if (window.scrollY >= 1) {
                header.current.classList.add("scrolling");
            }
            else {
                header.current.classList.remove("scrolling");
            }
        }
        window.addEventListener("scroll", handleHeader);
        // cleanup function
        return () => {
            window.removeEventListener("scroll", handleHeader);
        };
    }, [])

    //toggle discount 
    const disBtn = useRef(null);
    const discount = useRef(null);

    //toggle search
    const search = useRef(null);

    return (
        <Fragment>
            <header className="header" ref={header}>
                <Container className="g-0">
                    <section className="topnav">
                        <p
                            ref={disBtn}
                            className="discount"
                            onClick={() => {
                                disBtn.current.classList.add("blurred");
                                setTimeout(() => {
                                    disBtn.current.classList.remove("blurred");
                                }, 500);
                                if (discount.current.classList.contains("disabled")) {
                                    discount.current.classList.remove("disabled");
                                    setTimeout(() => {
                                        discount.current.classList.toggle("active");
                                    }, 150);
                                } else {
                                    discount.current.classList.toggle("active");
                                    setTimeout(() => {
                                        discount.current.classList.add("disabled");
                                    }, 500);
                                }
                            }}
                        >
                            Get up to <strong>20$ OFF</strong>
                            <span className="dc-details">See details</span>
                        </p>
                        <p className="fs-condition">Free shipping on 3+ items</p>
                        <article ref={discount} className="discount-details disabled">
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="exit-button"
                                onClick={() => {
                                    if (discount.current.classList.contains("disabled")) {
                                        discount.current.classList.remove("disabled");
                                        setTimeout(() => {
                                            discount.current.classList.toggle("active");
                                        }, 150);
                                    } else {
                                        discount.current.classList.toggle("active");
                                        setTimeout(() => {
                                            discount.current.classList.add("disabled");
                                        }, 500);
                                    }
                                }} />
                            <p className="dis-text">Buy more, save more.</p>
                            <div className="d-conditions">
                                <ul className="b-con-list">
                                    <li className="b-con-item">Buy.</li>
                                    <li className="b-con-item">3 items from $78</li>
                                    <li className="b-con-item">4 items from $99</li>
                                    <li className="b-con-item">5+ items from $116</li>
                                </ul>
                                <ul className="d-rate-list">
                                    <li className="d-rate-item">Get.</li>
                                    <li className="d-rate-item">10% OFF</li>
                                    <li className="d-rate-item">15% OFF</li>
                                    <li className="d-rate-item">20% OFF</li>
                                </ul>
                            </div>
                            <p className="f-ship-con">Plus, get free shipping on 3+ items!</p>
                            <Btn btnClass="btn fill-trans-white" btnContent="SHOP NOW"></Btn>
                        </article>
                    </section>
                    <nav className="navbar g-0 p-0">
                        {mnav ? <MobileNavbar searchRef={search} /> : <Navbar searchRef={search} />}
                    </nav>
                </Container>
                <Search search={search}></Search>
            </header>
        </Fragment>
    );
}

export default Header;
