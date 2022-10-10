import { useEffect, useState } from "react";
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
    const totalPrice = cartItems.reduce((prev, cartItem) => prev + cartItem.price * cartItem.quantity, 0);
    const dispatch = useDispatch();

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
                                <span className="price">${cartItem.price * cartItem.quantity}</span>
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
    //remove cart
    const removeCart = () => {
        cart.current.classList.remove("active");
    };

    const [check, setCheck] = useState(false);
    useEffect(() => {
        const checkCartContent = () => {
            if (cartItems.length != 0) setCheck(true);
            else setCheck(false);
        };
        checkCartContent();
    }, [cartItems.length]);

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
            <div className="total-price-wrapper">
                <p className="total-price-text">Total price:</p>
                <span className="total-price">${totalPrice}</span>
            </div>
        </section>
    );
};

export default Cart;
