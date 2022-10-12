import { useEffect, useState } from "react";
import { memo } from "react";
import { Row } from "react-bootstrap";
import ProductBox from "../../../../global-components/product-box/ProductBox";
import "./BestSellers.scss";

//get types of products
const BestSellers = () => {
    const [cates, setCates] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/categories")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                const dLastIndex = data.pop();
                setCates(data.slice(1));
            });
    }, []);

    //get value base on type of products
    const [url, setUrl] = useState(
        "http://localhost:3001/api/products?categoryId=1&_sort=reviews&_order=desc&start=0&_limit=4",
    );
    const [products, setProducts] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, [url]);

    // set text color to the product's type
    const [clrWomen, setClrWomen] = useState("#ef776a");
    const [clrMen, setClrMen] = useState("gray");
    const [clrUnisex, setClrUnisex] = useState("gray");
    const handleClr = (e) => {
        switch (e.target.innerText) {
            case "WOMEN":
                setClrWomen("#ef776a");
                setClrMen("gray");
                setClrUnisex("gray");
                break;
            case "MEN":
                setClrWomen("gray");
                setClrMen("#ef776a");
                setClrUnisex("gray");
                break;
            case "UNISEX":
                setClrWomen("gray");
                setClrMen("gray");
                setClrUnisex("#ef776a");
                break;
            default:
                break;
        }
    };

    return (
        <section className="best-sellers container g-0">
            <div className="b-s-buttons">
                <p className="b-s-text">Best sellers.</p>
                <ul className="b-s-btn-list">
                    {cates &&
                        cates.map((cate, key) => (
                            <li
                                key={key}
                                className="b-s-btn"
                                onClick={(e) => {
                                    setUrl(
                                        `http://localhost:3001/api/products?categoryId=${cate.id}&_sort=reviews&_order=desc&start=0&_limit=4`,
                                    );
                                    handleClr(e);
                                }}
                            >
                                <span
                                    style={{
                                        color: eval(`clr${cate.name}`),
                                        borderBottom: `1px solid ${eval(`clr${cate.name}`)}`,
                                    }}
                                >
                                    {cate.name.toUpperCase()}
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
            <Row>
                {products &&
                    products.map((product, index) => (
                        <ProductBox
                            id={product.id}
                            productimg={product.productimg}
                            productimghover={product.productimghover}
                            product={product}
                            reviews={product.reviews}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        ></ProductBox>
                    ))}
            </Row>
        </section>
    );
};

export default memo(BestSellers);
