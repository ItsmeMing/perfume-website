import React, { useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import "./Desire.scss";

function Desire() {
    const img = useRef(null);
    const textContainer = useRef(null);
    useEffect(() => {
        const handleWidth = () => {
            if (window.innerWidth < 992) {
                textContainer.current.removeAttribute("style");
            } else {
                textContainer.current.style.height = `${img.current.offsetHeight}px`;
            }
        };
        handleWidth();
        window.addEventListener("resize", handleWidth);

        // cleanup function
        return () => {
            window.removeEventListener("resize", handleWidth);
        };
    }, []);
    return (
        <section className="desire-container">
            <Row className="g-0">
                <Col lg={6} md={12} xs={12} className="d-img-wrapper g-0">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/For-all-_desktop.jpg"
                        alt="desire-img"
                        className="d-img"
                        ref={img}
                    ></img>
                </Col>
                <Col lg={6} md={12} xs={12} className="d-text-container g-0" ref={textContainer}>
                    <div className="d-text-wrapper">
                        <p className="desire">Fragrance for all.</p>
                        <p className="desire-details">
                            We eliminate retailer markups, celebrity marketing, and licensing fees to offer luxury
                            scents for 70-90% less.
                        </p>
                        <button className="desire-button">LEARN MORE</button>
                        <p className="d-price-text">Fair pricing</p>
                        <div className="d-price-wrapper">
                            <div className="d-price-group">
                                <p className="d-p-g-element">From $19</p>
                                <p className="d-p-g-element">
                                    <strong>Dossier</strong>
                                </p>
                            </div>
                            <div className="d-price-group">
                                <p className="d-p-g-element">$100-$350</p>
                                <p className="d-p-g-element">
                                    <strong>Luxury brands</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    );
}

export default Desire;
