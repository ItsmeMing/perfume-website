import { useEffect, useState } from "react";
import { memo } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../../../../redux/cartSlice";
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
                setCates(data);
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
                imgurl: product.productimg,
            }),
        );
    };

    //check the cart to either add new product or increase product's quantity if product exist
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
                        <Col lg={3} md={6} xs={6} id={product.id} className="product" key={index}>
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
                                <button
                                    className="product-btn"
                                    onClick={() => {
                                        checkProduct(product);
                                    }}
                                >
                                    ADD TO CART
                                </button>
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
        </section>
    );
};

export default memo(BestSellers);
