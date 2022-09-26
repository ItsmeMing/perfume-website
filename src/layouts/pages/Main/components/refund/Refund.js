import { Col, Row } from "react-bootstrap";
import refund from "./refund.jpg";
import "./Refund.scss";

function Refund() {
    return (
        <section className="refund-container">
            <Row className="refund-wrapper">
                <Col lg={6} md={12} xs={12} className="refund-item">
                    <div className="refund-content">
                        <p className="refund-text">Try, then decide.</p>
                        <p className="refund-2nd-text">
                            Perfumes are personal, so we don’t take it personally if a scent is not for you. Simply ship
                            it back to us for a full refund. We donate all returns to charity so no bottle of perfume
                            ever goes to waste.
                        </p>
                        <button className="refund-btn">LEARN MORE</button>
                    </div>
                </Col>
                <Col lg={6} md={12} xs={12} className="refund-item">
                    <img src={refund} alt=""></img>
                </Col>
            </Row>
        </section>
    );
}

export default Refund;
