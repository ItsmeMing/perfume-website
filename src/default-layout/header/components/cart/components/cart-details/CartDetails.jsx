import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";
import cartSlice from "../../../../../../redux/cartSlice";
import "./CartDetails.scss";

const CartDetails = ({ dispatch, dPer }) => {
    //get cart data from redux
    const cartItems = useSelector((state) => state.cart).cart.list;

    return (
        <ul className="cart-list">
            {cartItems.map((cartItem, index) => {
                const totalPrice = cartItem.price * cartItem.quantity;
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
                                <span className="price">${totalPrice}</span>
                                <br />
                                <span className="d-price">${(totalPrice * (100 - dPer)) / 100}</span>
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

export default CartDetails;
