import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import cartSlice from "../../../../redux/cartSlice";
import Btn from "../../../../components/global-components/btn/Btn";
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
                                <div className="product-info flex">
                                    <p className="product-name">
                                        {cartItem.name}
                                        <br />
                                        <span className="product-description">
                                            Inspired by
                                            <br />
                                            {cartItem.description}
                                        </span>
                                    </p>
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
                            <div className="tprice-delete flex">
                                <span>${cartItem.price * cartItem.quantity}</span>
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
            <div className="triangle"></div>
            <div className="cart-wrapper">
                <p className="cart-title">Your cart.</p>
                <Btn btnClass="btn ease-orange-trans auto-width" btnContent="Close" onClick={removeCart}></Btn>
            </div>
            <div className="cart-content">{check ? <CartContent></CartContent> : <p>null</p>}</div>
            <div className="total-price-wrapper">
                <p className="totel-price-text">Total price:</p>
                <span className="total-price">${totalPrice}</span>
            </div>
        </section>
    );
};

export default Cart;
