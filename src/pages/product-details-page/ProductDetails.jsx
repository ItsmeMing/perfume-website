import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ImageSection from "./components/image-section/ImageSection";
import DetailsBox from "./components/details-box/DetailsBox";
import Quality from "./components/quality-services/Quality";
import Services from "./components/quality-services/Services";
import "./ProductDetails.scss";

function ProductDetails() {
    const { name } = useParams();
    const products = useSelector((state) => state.products).products.data;
    const pFiltered = products.filter((p) => {
        return p.name === name.toUpperCase();
    });
    const product = pFiltered[0];

    return (
        <>
            <Container className="product-details-container g-0">
                <Row className="g-0">
                    <Col lg={6} md={12} xs={12} className="image-section">
                        <ImageSection product={product} />
                    </Col>
                    <Col lg={6} md={12} xs={12} className="product-details-section">
                        <DetailsBox product={product} />
                    </Col>
                </Row>
                <Quality />
                <Services />
            </Container>
        </>
    );
}

export default ProductDetails;
