import { Fragment, useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Topnav from "./components/topnav/Topnav";
import { Navbar, MobileNavbar } from "./components/navbar/Navbar";
import Search from "./components/search/Search";
import Auth from "./components/auth/Auth";
import Cart from "./components/cart/Cart";
import MobileMenu from "./components/mobile-menu/MobileMenu";
import "./assets/styles/Header.scss";

const Header = () => {
    //switch to navbar/mobile-navbar base on screen's width
    const [mnav, setMnav] = useState(false);
    useEffect(() => {
        const handleMobileNav = () => {
            if (window.innerWidth <= 991.98) setMnav(true);
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

    //toggle search
    const search = useRef(null);

    //toggle auth-form
    const auth = useRef(null);

    //submenu's ref
    const sMenu = useRef(null);

    //arrow's ref
    const arrow = useRef(null);

    //cart's ref
    const cart = useRef(null);

    return (
        <Fragment>
            <header className="header" ref={header}>
                <Container className="g-0">
                    <Topnav></Topnav>
                    <nav className="navbar g-0 p-0">
                        {mnav ? <MobileNavbar cart={cart} /> : <Navbar searchRef={search} auth={auth} cart={cart} />}
                    </nav>
                </Container>
                <Search search={search}></Search>
                <Auth auth={auth}></Auth>
                <Cart cart={cart}></Cart>
                <MobileMenu searchRef={search} auth={auth} sMenu={sMenu} arrow={arrow}></MobileMenu>
                <div
                    className="overlay"
                    onClick={() => {
                        document.querySelector(".m-menu").classList.remove("active");
                        document.querySelector(".overlay").classList.remove("active");
                        cart.current.classList.remove("active");
                        search.current.classList.remove("active");
                        if (sMenu.current.classList.contains("active")) {
                            sMenu.current.classList.remove("active");
                            arrow.current.classList.remove("active");
                        }
                    }}
                ></div>
            </header>
        </Fragment>
    );
};

export default Header;
