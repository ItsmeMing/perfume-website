import { Col, Row } from "react-bootstrap";
import "./Gallery.scss";

const Gallery = () => {
    return (
        <section className="gallery-container g-0">
            <Row className="g-2">
                <Col md={3} xs={6}>
                    <img
                        className="gallery-img"
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/Your-Dossier-Fam-1-_Desktop.jpg?v=1631216995"
                        alt=""
                    ></img>
                </Col>
                <Col md={3} xs={6}>
                    <img
                        className="gallery-img"
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/your-dossier-fam-2-_mobile.jpg?v=1631217011"
                        alt=""
                    ></img>
                </Col>
                <Col md={3} xs={6}>
                    <img
                        className="gallery-img"
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/Your-Dossier-Fam-3-_Desktop.jpg?v=1631217029"
                        alt=""
                    ></img>
                </Col>
                <Col md={3} xs={6}>
                    <img
                        className="gallery-img"
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/Your-Dossier-Fam-4-_Desktop.jpg?v=1631217046"
                        alt=""
                    ></img>
                </Col>
            </Row>
        </section>
    );
};

export default Gallery;
