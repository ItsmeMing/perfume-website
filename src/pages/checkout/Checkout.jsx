import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faFire } from "@fortawesome/free-solid-svg-icons";
import Information from "./components/information/Information";
import logo from "../../default-layout/header/components/navbar/assets/images/logo.webp";
import "./Checkout.scss";

const Checkout = () => {
    const [process, setProcess] = useState();
    useEffect(() => {
        setProcess(<Information setProcess={setProcess} />);
    }, []);

    const cartItems = useSelector((state) => state.cart).cart.list;
    console.log(cartItems);
    return (
        <main className="checkout-wrapper">
            <Container className="checkout-container g-0">
                <Row className="g-0">
                    <Col lg={7} md={12} xs={12}>
                        <section className="checkout-main">
                            <img src={logo} alt=""></img>
                            <div className="checkout-breadcumb">
                                <span className="checkout-breadcumb-text">Information</span>
                                <FontAwesomeIcon className="arrow" icon={faChevronRight} />
                                <span className="checkout-breadcumb-text">Shipping</span>
                                <FontAwesomeIcon className="arrow" icon={faChevronRight} />
                                <span className="checkout-breadcumb-text">Payment</span>
                            </div>
                            <div className="urgency-message">
                                <FontAwesomeIcon icon={faFire} />
                                <strong> Items in your cart are in high demand, act fast.</strong>
                            </div>
                            {process}
                        </section>
                    </Col>
                    <Col lg={5} md={12} xs={12}>
                        <section className="checkout-sidebar">
                            <ul className="product-list">
                                <li className="product">
                                    <img></img>
                                </li>
                            </ul>
                        </section>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Checkout;
