import { useState, useEffect, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faFire, faTags } from "@fortawesome/free-solid-svg-icons";
import Information from "./components/information/Information";
import store from "../../redux/store";
import logo from "../../default-layout/header/components/navbar/assets/images/logo.webp";
import "./Checkout.scss";

const Checkout = () => {
    //always start at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Checkout";
    }, []);

    const cartItems = useSelector((state) => state.cart).cart.list;
    const userCheckout = useMemo(() => {
        return {
            products: cartItems,
            discountPer: undefined,
            email: undefined,
            name: undefined,
            address: undefined,
            phone: undefined,
            phoneValid: undefined,
            city: undefined,
            shipping: undefined,
            payment: undefined,
            billing: undefined,
        };
    }, [cartItems]);

    const totalQuantity = useSelector((state) => state.cart).totalQuantity;
    const productPrice = document.querySelectorAll(".product-price#checkout");
    const totalProductPrice = document.querySelectorAll(".after-discount");
    const [sale, setSale] = useState(0);
    const [dPer, setDPer] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [informationBtn, setInformationBtn] = useState("active");
    const [shippingBtn, setShippingBtn] = useState("");
    const [paymentBtn, setPaymentBtn] = useState("");

    const handleCart = useCallback(() => {
        const totalQuantity = store.getState().cart.totalQuantity;
        if (totalQuantity >= 0) {
            if (totalQuantity >= 3) {
                for (const pp of productPrice) {
                    pp.classList.remove("hidden");
                }
                for (const tpp of totalProductPrice) {
                    tpp.classList.remove("hidden");
                }
                if (totalQuantity === 3) {
                    setDPer(10);
                    userCheckout.discountPer = 10;
                    setSale("10% OFF FOR 3");
                } else if (totalQuantity === 4) {
                    setDPer(15);
                    userCheckout.discountPer = 15;
                    setSale("15% OFF FOR 4");
                } else {
                    setDPer(20);
                    userCheckout.discountPer = 20;
                    setSale("20% OFF FOR 5");
                }
            } else {
                setDPer(0);
                for (const pp of productPrice) {
                    pp.classList.add("hidden");
                }
                for (const tpp of totalProductPrice) {
                    tpp.classList.add("hidden");
                }
            }
        } else {
        }
        if (cartItems) {
            const totalPrice =
                (cartItems.reduce((prev, cartItem) => prev + cartItem.price * cartItem.quantity, 0) * (100 - dPer)) /
                100;
            userCheckout.totalPrice = totalPrice;
            setTotalPrice(totalPrice);
            const shippingPrice = totalQuantity < 3 ? 9 : 0;
            userCheckout.shippingPrice = shippingPrice;
            setShippingPrice(shippingPrice);
        }
    }, [cartItems, dPer, productPrice, totalProductPrice, userCheckout]);

    useEffect(() => {
        handleCart();
    }, [handleCart]);

    const [error, setError] = useState();

    const [process, setProcess] = useState("");
    useEffect(() => {
        setProcess(
            <Information
                setProcess={setProcess}
                userCheckout={userCheckout}
                setInformationBtn={setInformationBtn}
                setShippingBtn={setShippingBtn}
                setPaymentBtn={setPaymentBtn}
                setError={setError}
            />,
        );
    }, [userCheckout]);

    return (
        <main className="checkout-wrapper">
            <Container className="checkout-container g-0">
                <Row className="g-0">
                    <Col lg={7} md={12} xs={12}>
                        <section className="checkout-main">
                            <Link to="/">
                                <img src={logo} alt=""></img>
                            </Link>
                            <div className="checkout-breadcumb">
                                <span className={`checkout-breadcumb-text ${informationBtn}`}>Information</span>
                                <FontAwesomeIcon className="arrow" icon={faChevronRight} />
                                <span className={`checkout-breadcumb-text ${shippingBtn}`}>Shipping</span>
                                <FontAwesomeIcon className="arrow" icon={faChevronRight} />
                                <span className={`checkout-breadcumb-text ${paymentBtn}`}>Payment</span>
                            </div>
                            <div className="urgency-message">
                                <FontAwesomeIcon icon={faFire} />
                                <strong> Items in your cart are in high demand, act fast.</strong>
                            </div>
                            <p className="error-text">{error}</p>
                            {process}
                        </section>
                    </Col>
                    <Col lg={5} md={12} xs={12}>
                        <section className="checkout-sidebar">
                            <div className="products">
                                {cartItems.map((cartItem, index) => {
                                    return (
                                        <div className="product-checkout" key={index}>
                                            <div className="product-description">
                                                <img src={cartItem.imgurl} alt="" className="product-img"></img>
                                                <div className="product-info-group">
                                                    <p className="product-name">{cartItem.name}</p>
                                                    <p className="product-price" id="checkout">
                                                        <FontAwesomeIcon icon={faTags}></FontAwesomeIcon> {sale} (-$
                                                        {(cartItem.price * cartItem.quantity * dPer) / 100})
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="product-total-price">
                                                <p
                                                    className="before-discount"
                                                    style={{
                                                        textDecoration: totalQuantity >= 3 ? "line-through" : "none",
                                                    }}
                                                >
                                                    ${cartItem.price * cartItem.quantity}
                                                </p>
                                                <p className="after-discount">
                                                    ${(cartItem.price * cartItem.quantity * (100 - dPer)) / 100}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="total-wrapper">
                                <div className="subtotal-group">
                                    <p className="subtotal-text">Subtotal</p>
                                    <span className="subtotal-price">${totalPrice}</span>
                                </div>
                                <div className="shipping-group">
                                    <p className="shipping-text">Shipping</p>
                                    <span className="shipping-price">${shippingPrice}</span>
                                </div>
                            </div>
                            <div className="total-group">
                                <p className="total-text">Total</p>
                                <p className="total-price">
                                    USD <span className="total">${totalPrice + shippingPrice}</span>
                                </p>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Checkout;
