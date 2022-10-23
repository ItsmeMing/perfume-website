import { useEffect, useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../../../redux/cartSlice";
import Btn from "../../../../global-components/btn/Btn";
import "./Cart.scss";
import "./CartDetails.scss";

const Cart = ({ cart, authen }) => {
    const loginStatus = useSelector((state) => state.user).logged;

    //get cart data from redux
    const cartItems = useSelector((state) => state.cart).cart.list;
    const dispatch = useDispatch();

    //discount, shipping price, subtotal
    const totalQuantity = useSelector((state) => state.cart).totalQuantity;
    const progressRef = useRef(null);
    const [iPriceClass, setIPriceClass] = useState(null);
    //discount percent
    const [dPer, setDPer] = useState(0);
    const progressBarRef = useRef(null);
    const discountConRef = useRef(null);
    const [discountCon, setDiscountCon] = useState(3);

    useEffect(() => {
        if (totalQuantity >= 0) {
            setDiscountCon(3 - totalQuantity);
            if (totalQuantity >= 3) {
            } else {
            }
        } else {
        }
    }, [totalQuantity]);

    //remove cart
    const removeCart = () => {
        cart.current.classList.remove("active");
    };

    const handleLogin = () => {
        removeCart();
        authen.current.classList.add("active");
    };

    const CartDetails = () => {
        return (
            <ul className="cart-list">
                {cartItems.map((cartItem, index) => {
                    console.log(cartItem.totalPrice);
                    return (
                        <li key={index} className="cart-item">
                            <div className="cart-item-group">
                                <img className="product-img" src={cartItem.imgurl} alt=""></img>
                                <div className="product-info-wrapper">
                                    <div className="product-info">
                                        <p className="product-name">{cartItem.name}</p>
                                        <span className="product-description">
                                            Inspired by
                                            <br />
                                            {cartItem.description}
                                        </span>
                                    </div>
                                    <div className="quantity-adjust-box">
                                        {cartItem.quantity}
                                        <span
                                            className="quantity-plus"
                                            onClick={() => {
                                                dispatch(cartSlice.actions.updatePlusCartItem(cartItem.id));
                                            }}
                                        >
                                            +
                                        </span>
                                        <span
                                            className="quantity-minus"
                                            onClick={() => {
                                                dispatch(cartSlice.actions.updateMinusCartItem(cartItem.id));
                                            }}
                                        >
                                            -
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="tprice-delete">
                                <div className="tprice-wrapper">
                                    <span className={`price ${iPriceClass}`}>${cartItem.totalPrice}</span>
                                    <br />
                                    <span className="d-price">
                                        ${cartItem.totalPrice - cartItem.totalPrice * (dPer.current / 100)}
                                    </span>
                                </div>
                                <FontAwesomeIcon
                                    className="trash-can"
                                    icon={faTrashCan}
                                    onClick={() => {
                                        dispatch(cartSlice.actions.deleteCartItem(cartItem.id));
                                    }}
                                ></FontAwesomeIcon>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    };

    const CartContent = () => {
        return (
            <>
                <CartDetails />
                <div className="progress-wrapper">
                    <p className="progress hidden" ref={progressRef}>
                        You get <b style={{ fontWeight: "bold" }}>{dPer - 5}% OFF + FREE SHIPPING!</b>
                    </p>
                    <div className="progress-bar">
                        <span ref={progressBarRef}></span>
                    </div>
                    <p className="progress-text" ref={discountConRef}>
                        You are <b style={{ fontWeight: "bold" }}>{discountCon}</b> products away from{" "}
                        <b style={{ fontWeight: "bold" }}>{}</b>!
                    </p>
                </div>
                <ul className="price-details-list">
                    <li className="price-details-item">
                        <span className="price-details-label bold">Initial price:</span>
                        <span className="price-details-label light">${}</span>
                    </li>
                    <li className="price-details-item">
                        <span className="price-details-label bold">Discount applied:</span>
                        <span className="price-details-label light colored">{dPer.current === 0 ? "-" : `-$`}</span>
                    </li>
                    <li className="price-details-item">
                        <span className="price-details-label bold">Shipping:</span>
                        <span className="price-details-label light">{}</span>
                    </li>
                    <li className="price-details-item">
                        <span className="price-details-label bold">Subtotal:</span>
                        <span className="price-details-label light">${}</span>
                    </li>
                </ul>
                <Btn btnClass="btn checkout-btn ease-orange-trans" re={"re-rendered"}>
                    <span>GO TO CHECKOUT</span>
                    <span>${}</span>
                </Btn>
            </>
        );
    };

    return (
        <section className="cart-container" ref={cart}>
            <div className="cart-wrapper">
                <p className="cart-title">Your cart.</p>
                <Btn btnClass="btn custom ease-orange-trans" btnContent="Close" onClick={removeCart}></Btn>
            </div>
            {loginStatus === "true" ? (
                <CartContent />
            ) : (
                <div className="login-warning">
                    <p className="warning">Please log in in order to use this function</p>
                    <Btn btnClass="btn login ease-orange-trans" btnContent="LOG IN" onClick={handleLogin} />
                </div>
            )}
        </section>
    );
};

export default Cart;
