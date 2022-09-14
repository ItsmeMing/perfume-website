import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./BestSellers.scss";

function BestSellers() {
    const [cates, setCates] = useState(null);
    const [clrWomen, setClrWomen] = useState();
    const [clrMen, setClrMen] = useState("#ef776a");
    const [clrUnisex, setClrUnisex] = useState();
    const [products, setProducts] = useState(null);
    const [url, setUrl] = useState(
        "http://localhost:3001/api/products?categoryId=1&_sort=reviews&_order=desc&start=0&_limit=4",
    );

    useEffect(() => {
        fetch("http://localhost:3001/api/categories")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCates(data);
            });
    }, []);

    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            });
        console.log(products);
    }, [url]);

    const handleCateBtn = (clickedId) => {
        const temp = cates.filter((cate) => {
            return cate.id != clickedId;
        });
    };

    return (
        <Container className="best-sellers g-0">
            <div className="b-s-buttons">
                <p className="b-s-text">Best sellers.</p>
                <ul className="b-s-btn-list">
                    {cates &&
                        cates.map((cate, key) => (
                            <li
                                key={key}
                                className="b-s-btn"
                                style={{ color: `clr${cate.name}` }}
                                onClick={() => {
                                    setUrl(
                                        `http://localhost:3001/api/products?categoryId=${cate.id}&_sort=reviews&_order=desc&start=0&_limit=4`,
                                    );
                                }}
                            >
                                {cate.name.toUpperCase()}
                            </li>
                        ))}
                </ul>
            </div>
            <Row>
                {products &&
                    products.map((product, index) => (
                        <Col lg={3} md={6} xs={6} key={index} className="product">
                            <div
                                className="product-img-wrapper"
                                onMouseEnter={(e) => {
                                    e.currentTarget.childNodes[0].src = product.productimghover;
                                    e.currentTarget.childNodes[1].style.opacity = 1;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.childNodes[0].src = product.productimg;
                                    e.currentTarget.childNodes[1].removeAttribute("style");
                                }}
                            >
                                <img src={product.productimg} alt="" className="product-image"></img>
                                <button className="product-btn">ADD TO CART</button>
                            </div>
                            <div className="product-info">
                                <p className="product-reviews">Reviews: {product.reviews}</p>
                                <ul className="p-info-list">
                                    <li className="product-name">
                                        <strong>{product.name.toUpperCase()}</strong>
                                    </li>
                                    <li className="product-price">
                                        <strong>{product.price}$</strong>
                                    </li>
                                </ul>
                                <p className="product-des">
                                    Inspired by
                                    <br />
                                    {product.description}
                                </p>
                            </div>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}

export default BestSellers;
