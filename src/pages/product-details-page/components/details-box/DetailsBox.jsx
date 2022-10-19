import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../../../redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTruck, faBox } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import About from "./components/about/About";
import Notes from "./components/notes/Notes";
import Ingredients from "./components/ingredients/Ingredients";
import Details from "./components/details/Details";
import "./DetailsBox.scss";

const DetailsBox = ({ product }) => {
    //add product to cart
    const dispatch = useDispatch();
    const productId = useSelector((state) => state.cart).cart.productid;
    const cartItems = useSelector((state) => state.cart).cart.list;
    const AddItemToCart = (product) => {
        dispatch(
            cartSlice.actions.addCartItem({
                id: productId,
                productid: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: 1,
                imgurl: product.images.productimg,
            }),
        );
    };

    //check the cart to either add a new product or increase the product's quantity if one already exists.
    const checkProduct = (product) => {
        let check = false;
        let temp;
        if (cartItems.length === 0) AddItemToCart(product);
        else {
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i].productid === product.id) {
                    check = true;
                    temp = cartItems[i];
                }
            }
            switch (check) {
                case true:
                    dispatch(cartSlice.actions.updatePlusCartItem(temp.id));
                    break;
                case false:
                    AddItemToCart(product);
                    break;
                default:
                    break;
            }
        }
    };
    const [details, setDetails] = useState(
        <About concentration={product.concentration} gender={product.gender} about={product.about} />,
    );

    const [aboutBtn, setAboutBtn] = useState("active");
    const [notesBtn, setNotesBtn] = useState("");
    const [ingreBtn, setIngreBtn] = useState("");
    const [detailsBtn, setDetailsBtn] = useState("");

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
                    <span className="product-reviews" style={{ marginLeft: "10px" }}>
                        Reviews: {product.reviews}
                    </span>
                </p>
                <Btn
                    btnClass="btn ease-orange-trans"
                    onClick={() => {
                        checkProduct(product);
                    }}
                >
                    ADD TO CART
                </Btn>
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
                        <li
                            className="tab-btn"
                            onClick={() => {
                                setAboutBtn("active");
                                setNotesBtn("");
                                setIngreBtn("");
                                setDetailsBtn("");
                                setDetails(
                                    <About
                                        concentration={product.concentration}
                                        gender={product.gender}
                                        about={product.about}
                                    />,
                                );
                            }}
                        >
                            <Btn btnClass={`btn small ease-trans-black ${aboutBtn}`} btnContent="About"></Btn>
                        </li>
                        <li
                            className="tab-btn"
                            onClick={() => {
                                setAboutBtn("");
                                setNotesBtn("active");
                                setIngreBtn("");
                                setDetailsBtn("");
                                setDetails(<Notes product={product}></Notes>);
                            }}
                        >
                            <Btn btnClass={`btn small ease-trans-black ${notesBtn}`} btnContent="Notes"></Btn>
                        </li>
                        <li
                            className="tab-btn"
                            onClick={() => {
                                setAboutBtn("");
                                setNotesBtn("");
                                setIngreBtn("active");
                                setDetailsBtn("");
                                setDetails(<Ingredients product={product}></Ingredients>);
                            }}
                        >
                            <Btn btnClass={`btn small ease-trans-black ${ingreBtn}`} btnContent="Ingredients"></Btn>
                        </li>
                        <li
                            className="tab-btn"
                            onClick={() => {
                                setAboutBtn("");
                                setNotesBtn("");
                                setIngreBtn("");
                                setDetailsBtn("active");
                                setDetails(<Details product={product}></Details>);
                            }}
                        >
                            <Btn btnClass={`btn small ease-trans-black ${detailsBtn}`} btnContent="Details"></Btn>
                        </li>
                    </ul>
                    <article className="details-wrapper">{details}</article>
                </section>
            </section>
        </>
    );
};

export default DetailsBox;
