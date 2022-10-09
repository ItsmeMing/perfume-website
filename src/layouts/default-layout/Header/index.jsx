import { Fragment, useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { Navbar, MobileNavbar } from "./Navbar";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../../../components/global-components/btn/Btn";
import Search from "./search/Search";
import Auth from "./auth/Auth";
import "./Header.scss";

const Header = () => {
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
            } else {
                header.current.classList.remove("scrolling");
            }
        };
        window.addEventListener("scroll", handleHeader);
        // cleanup function
        return () => {
            window.removeEventListener("scroll", handleHeader);
        };
    }, []);

    //toggle discount
    const disBtn = useRef(null);
    const discount = useRef(null);
    const handleDisDetails = () => {
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
    };

    //toggle search
    const search = useRef(null);

    //toggle auth-form
    const auth = useRef(null);

    //get cart's length
    const cartCount = useSelector((state) => state.cart).cart.list.length;
    console.log(cartCount);

    return (
        <Fragment>
            <header className="header" ref={header}>
                <Container className="g-0">
                    <section className="topnav">
                        <p ref={disBtn} className="discount" onClick={handleDisDetails}>
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
                                }}
                            />
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
                        {mnav ? (
                            <MobileNavbar searchRef={search} auth={auth} />
                        ) : (
                            <Navbar searchRef={search} auth={auth} count={cartCount} />
                        )}
                    </nav>
                </Container>
                <Search search={search}></Search>
                <Auth auth={auth}></Auth>
            </header>
        </Fragment>
    );
};

export default Header;
