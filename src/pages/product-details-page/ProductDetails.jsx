import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import ImageSection from "./components/image-section/ImageSection";
import DetailsBox from "./components/details-box/DetailsBox";
import Quality from "./components/quality-services/Quality";
import Services from "./components/quality-services/Services";
import Reviews from "./components/reviews/Reviews";
import "./ProductDetails.scss";
import { useState } from "react";

function ProductDetails() {
    const { name } = useParams();
    const products = useSelector((state) => state.products).products.data;
    const [product, setProduct] = useState();

    useEffect(() => {
        //always start at the top of the page
        window.scrollTo(0, 0);
        const pFiltered = products.filter((p) => {
            return p.name === name.toUpperCase();
        });
        setProduct(pFiltered[0]);
        setTimeout(() => {
            document.title = `${product.description} Perfume Impression: ${product.name} - Dossier Perfumes`;
        });
    }, [name, product, products]);

    return (
        <>
            <Container className="product-details-container g-0">
                {product && (
                    <>
                        <div className="breadcumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to="/products">Products</Link>
                            <span>/</span>
                            <p style={{ fontWeight: "bold" }}>{product.name}</p>
                        </div>
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
                    </>
                )}
            </Container>
        </>
    );
}

export default ProductDetails;
