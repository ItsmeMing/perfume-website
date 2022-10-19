import { useState, memo } from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import ProductBox from "../../../../global-components/product-box/ProductBox";
import "./BestSellers.scss";

const BestSellers = () => {
    //get types of products
    const cates = useSelector((state) => state.products).categories.data;
    //get products
    const products = useSelector((state) => state.products).products.data;

    const [psFiltered, setPsFiltered] = useState(() => {
        return products
            .filter((product) => product.categoryId === 1)
            .filter((t) => t.reviews > 1000)
            .slice(0, 4)
            .sort((a, b) => {
                let x = a["reviews"];
                let y = b["reviews"];
                return y - x;
            });
    });
    const filtering = (key, name) => {
        setPsFiltered(
            // First, filter out products that have the same categoryId, then filter out products that have reviews > 1000.
            // Second, get the first 4 products, then sort them from the highest to the lowest.
            products
                .filter((product) => product.categoryId === key)
                .filter((t) => t.reviews > 1000)
                .slice(0, 4)
                .sort((a, b) => {
                    let x = a["reviews"];
                    let y = b["reviews"];
                    return y - x;
                }),
        );
    };

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
                                    filtering(cate.id);
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
                {psFiltered &&
                    psFiltered.map((pFiltered) => (
                        <ProductBox
                            key={pFiltered.id}
                            id={pFiltered.id}
                            productimg={pFiltered.images.productimg}
                            productimghover={pFiltered.images.productimghover}
                            product={pFiltered}
                            reviews={pFiltered.reviews}
                            name={pFiltered.name}
                            price={pFiltered.price}
                            description={pFiltered.description}
                        ></ProductBox>
                    ))}
            </Row>
        </section>
    );
};

export default memo(BestSellers);
