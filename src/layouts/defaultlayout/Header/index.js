import { Fragment, useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Header.scss";
import { Navbar, MobileNavbar } from "./navbar";
import Search from "./search";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
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

    const search = useRef(null);
    const disBtn = useRef(null);
    const discount = useRef(null);
    return (
        <Fragment>
            <header className="header">
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
                            <FontAwesomeIcon icon={faXmark} className="exit-button" />
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
                            <button className="s-n-button">SHOP NOW</button>
                        </article>
                    </section>
                    <nav className="navbar p-0">
                        {mnav ? <MobileNavbar search={search}></MobileNavbar> : <Navbar search={search}></Navbar>}
                    </nav>
                    <Search search={search}></Search>
                </Container>
            </header>
        </Fragment>
    );
}

export default Header;
