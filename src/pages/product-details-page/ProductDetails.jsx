import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ImageSection from "./components/image-section/ImageSection";
import DetailsBox from "./components/details-box/DetailsBox";
import Quality from "./components/quality-services/Quality";
import Services from "./components/quality-services/Services";
import Reviews from "./components/reviews/Reviews";
import "./ProductDetails.scss";

function ProductDetails() {
    //always start at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <Reviews reviewsCount={product.reviewsCount} product={product} />
            </Container>
        </>
    );
}

export default ProductDetails;
