import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartSlice from "../../redux/cartSlice";
import "./ProductBox.scss";
import store from "../../redux/store";

const ProductBox = ({ id, productimg, productimghover, product, reviewsCount, name, price, description }) => {
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
        localStorage.removeItem("cart");
        const cart = store.getState().cart.cart.list;
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    //check if user has logged in or not when clicking "ADD TO CART" button
    const loginStatus = useSelector((state) => state.user).logged;
    const handleAddProduct = () => {
        if (loginStatus === "true") checkProduct(product);
        else alert("Please login to continue");
    };

    return (
        <Col lg={3} md={6} xs={6} id={id} className="product">
            <div
                className="product-img-wrapper"
                onMouseEnter={(e) => {
                    if (window.matchMedia("(min-width: 992px)").matches) {
                        e.currentTarget.childNodes[0].src = productimghover;
                        e.currentTarget.childNodes[1].style.opacity = 1;
                    }
                }}
                onMouseLeave={(e) => {
                    if (window.matchMedia("(min-width: 992px)").matches) {
                        e.currentTarget.childNodes[0].src = productimg;
                        e.currentTarget.childNodes[1].removeAttribute("style");
                    }
                }}
            >
                <img src={productimg} alt="" className="product-image"></img>
                <button className="product-btn" onClick={handleAddProduct}>
                    ADD TO CART
                </button>
                {product.reviewsCount > 1000 ? <span className="bestseller-tag">Bestseller</span> : null}
            </div>
            <div className="product-info">
                <p className="product-reviews">Reviews: {reviewsCount}</p>
                <ul className="p-info-list">
                    <li className="product-name">
                        <b>
                            {" "}
                            <Link to={`/products/${name.toLowerCase()}`}>{name}</Link>
                        </b>
                    </li>
                    <li className="product-price">
                        <strong>{price}$</strong>
                    </li>
                </ul>
                <p className="product-des">
                    Inspired by
                    <br />
                    {description}
                </p>
            </div>
        </Col>
    );
};

export default ProductBox;
