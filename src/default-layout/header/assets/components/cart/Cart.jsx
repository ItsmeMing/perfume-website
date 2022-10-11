import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../../../../redux/cartSlice";
import Btn from "../../../../../global-components/btn/Btn";
import "./Cart.scss";
import "./CartContent.scss";

const Cart = ({ cart }) => {
    //get cart data from redux
    const cartItems = useSelector((state) => state.cart).cart.list;
    const dispatch = useDispatch();

    //discount, shipping price, subtotal
    const [check, setCheck] = useState(false);
    const dPer = useRef(0);
    const [iPriceClass, setIPriceClass] = useState(null);
    const [sPrice, setSPrice] = useState(9);
    const [dTotal, setDTotal] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [sTotal, setSTotal] = useState();
    const [dNumber, setDNumber] = useState(null);
    const [dCondition, setDCondition] = useState(null);
    const [dProgress, setDProgress] = useState(null);

    const progressRef = useRef();
    const progressBarRef = useRef();
    const progressTextRef = useRef();

    useEffect(() => {
        const checkCartContent = (totalQuantity) => {
            if (totalQuantity >= 0) {
                setCheck(true);
                setDCondition(3 - totalQuantity);
                setDNumber(10);
                setDProgress(`${dNumber}% OFF + FREE SHIPPING`);
                progressTextRef.current.classList.remove("hidden");
                progressRef.current.classList.add("hidden");
                if (totalQuantity > 2) {
                    setSPrice(0);
                    setIPriceClass("crossed-out");
                    progressRef.current.classList.remove("hidden");
                    if (totalQuantity === 3) {
                        dPer.current = 10;
                        setDCondition(1);
                        setDNumber(15);
                        setDProgress(`${dNumber}% OFF`);
                        progressBarRef.current.style.width = "60%";
                    } else if (totalQuantity === 4) {
                        dPer.current = 15;
                        setDCondition(1);
                        setDNumber(20);
                        setDProgress(`${dNumber}% OFF`);
                        progressBarRef.current.style.width = "80%";
                    } else {
                        dPer.current = 20;
                        setDNumber(25);
                        progressTextRef.current.classList.add("hidden");
                        progressBarRef.current.style.width = "100%";
                    }
                } else {
                    setSPrice(9);
                    setIPriceClass(null);
                    progressBarRef.current.style.width = `${20 * totalQuantity}%`;
                    dPer.current = 0;
                }
            } else setCheck(false);
        };

        //check total products for discount
        const totalQuantity = cartItems.reduce((prev, cartItem) => prev + cartItem.quantity, 0);
        checkCartContent(totalQuantity);

        //discount sum
        setDTotal(
            cartItems.reduce((prev, cartItem) => prev + (cartItem.price * cartItem.quantity * dPer.current) / 100, 0),
        );

        //total original price
        setTotalPrice(cartItems.reduce((prev, cartItem) => prev + cartItem.price * cartItem.quantity, 0));

        //total price after discount
        setSTotal(totalPrice - dTotal + sPrice);
    }, [cartItems.length, cartItems, dTotal, sPrice, totalPrice, dNumber]);

    //remove cart
    const removeCart = () => {
        cart.current.classList.remove("active");
    };

    const CartContent = () => {
        return (
            <ul className="cart-list">
                {cartItems.map((cartItem, index) => {
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
                                    <span className={`price ${iPriceClass}`}>
                                        ${cartItem.price * cartItem.quantity}
                                    </span>
                                    <br />
                                    <span className="d-price">
                                        $
                                        {cartItem.price * cartItem.quantity -
                                            cartItem.price * cartItem.quantity * (dPer.current / 100)}
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

    return (
        <section className="cart-container" ref={cart}>
            <div className="cart-wrapper">
                <p className="cart-title">Your cart.</p>
                <Btn btnClass="btn custom ease-orange-trans" btnContent="Close" onClick={removeCart}></Btn>
            </div>
            {check ? (
                <CartContent></CartContent>
            ) : (
                <div className="null-section">
                    <p>null</p>
                </div>
            )}
            <div className="progress-wrapper">
                <p className="progress" ref={progressRef}>
                    You get <b style={{ fontWeight: "bold" }}>{dNumber - 5}% OFF + FREE SHIPPING!</b>
                </p>
                <div className="progress-bar">
                    <span ref={progressBarRef}></span>
                </div>
                <p className="progress-text" ref={progressTextRef}>
                    You are <b style={{ fontWeight: "bold" }}>{dCondition}</b> products away from{" "}
                    <b style={{ fontWeight: "bold" }}>{dProgress}</b>!
                </p>
            </div>
            <ul className="price-details-list">
                <li className="price-details-item">
                    <span className="price-details-label bold">Initial price:</span>
                    <span className="price-details-label light">${totalPrice}</span>
                </li>
                <li className="price-details-item">
                    <span className="price-details-label bold">Discount applied:</span>
                    <span className="price-details-label light colored">
                        {dPer.current === 0 ? "-" : `-$${dTotal}`}
                    </span>
                </li>
                <li className="price-details-item">
                    <span className="price-details-label bold">Shipping:</span>
                    <span className="price-details-label light">{sPrice == 0 ? "FREE" : `$${sPrice}`}</span>
                </li>
                <li className="price-details-item">
                    <span className="price-details-label bold">Subtotal:</span>
                    <span className="price-details-label light">${sTotal}</span>
                </li>
            </ul>
            <Btn btnClass="btn checkout-btn ease-orange-trans">
                <span>GO TO CHECKOUT</span>
                <span>${sTotal}</span>
            </Btn>
        </section>
    );
};

export default Cart;
