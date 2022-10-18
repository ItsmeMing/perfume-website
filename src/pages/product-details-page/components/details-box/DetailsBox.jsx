import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTruck, faBox } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import About from "../about/About";
import "./DetailsBox.scss";

const DetailsBox = ({ product }) => {
    const [details, setDetails] = useState(
        <About concentration={product.concentration} gender={product.gender} about={product.about} />,
    );
    return (
        <>
            <section className="product-details-wrapper">
                <div className="p-info-list">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">${product.price}</p>
                </div>
                <p className="product-des">
                    Inspired by <b>{product.description}</b>
                </p>
                <p className="product-vendor">
                    <span>Eau de Parfum. Size: 50ml / 1.7oz</span>
                    <span className="product-reviews">Reviews: {product.reviews}</span>
                </p>
                <Btn btnClass="btn ease-orange-trans">ADD TO CART</Btn>
                <ul className="feature-list">
                    <li className="feature-item">
                        <FontAwesomeIcon icon={faCircleCheck} className="feature-icon"></FontAwesomeIcon>
                        <p>
                            Try, then decide
                            <br />
                            <span>Learn more</span>
                        </p>
                    </li>
                    <li className="feature-item">
                        <FontAwesomeIcon icon={faTruck} className="feature-icon"></FontAwesomeIcon>
                        <p>
                            Free shipping
                            <br />
                            <span>(on any 3+ items)</span>
                        </p>
                    </li>
                    <li className="feature-item">
                        <FontAwesomeIcon icon={faBox} className="feature-icon"></FontAwesomeIcon>
                        <p>
                            Free returns
                            <br />
                            <span>(No questions asked)</span>
                        </p>
                    </li>
                </ul>
                <section className="tab-wrapper">
                    <ul className="tab-btn-list">
                        <li className="tab-btn">
                            <Btn btnClass="btn small ease-trans-black" btnContent="About"></Btn>
                        </li>
                        <li className="tab-btn">
                            <Btn btnClass="btn small ease-trans-black" btnContent="Notes"></Btn>
                        </li>
                        <li className="tab-btn">
                            <Btn btnClass="btn small ease-trans-black" btnContent="Ingredients"></Btn>
                        </li>
                        <li className="tab-btn">
                            <Btn btnClass="btn small ease-trans-black" btnContent="Details"></Btn>
                        </li>
                    </ul>
                    <article>{details}</article>
                </section>
            </section>
        </>
    );
};

export default DetailsBox;
