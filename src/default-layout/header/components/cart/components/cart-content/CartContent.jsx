import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import CartDetails from "../cart-details/CartDetails";
import Btn from "../../../../../../global-components/btn/Btn";
import { useCallback } from "react";

const CartContent = ({ dispatch }) => {
    //get cart data from redux
    const totalQuantity = useSelector((state) => state.cart).totalQuantity;
    const cartItems = useSelector((state) => state.cart).cart.list;

    //discount percent
    const [dPer, setDPer] = useState(0);
    //discount progress's ref
    const progressRef = useRef(null);
    //progress bar's ref
    const progressBarRef = useRef(null);
    //next discount's ref
    const nextDiscountRef = useRef(null);
    //number of products needed to have discount
    const [discountConNum, setDiscountConNum] = useState(3 - totalQuantity);
    //next discount
    const [nextDiscount, setNextDiscount] = useState("10% OFF + FREE SHIPPING");
    //total init price
    const [totalInitPrice, setTotalInitPrice] = useState(0);
    //total reduced money after applying discount
    const [totalReduced, setTotalReduced] = useState(0);
    //shipping price
    const [shippingPrice, setShippingPrice] = useState(0);
    //subtotal
    const [subTotal, setSubTotal] = useState(0);

    const handleCart = useCallback(
        (totalQuantity) => {
            if (totalQuantity >= 0) {
                if (totalQuantity >= 3) {
                    progressRef.current.classList.remove("hidden");
                    if (totalQuantity === 3) {
                        setDPer(10);
                        progressBarRef.current.style.width = "60%";
                        setDiscountConNum(1);
                        setNextDiscount("15% OFF");
                    } else if (totalQuantity === 4) {
                        setDPer(15);
                        progressBarRef.current.style.width = "80%";
                        setDiscountConNum(1);
                        setNextDiscount("20% OFF");
                        nextDiscountRef.current.classList.remove("hidden");
                    } else {
                        setDPer(20);
                        progressBarRef.current.style.width = "100%";
                        nextDiscountRef.current.classList.add("hidden");
                    }
                } else {
                    setDPer(0);
                    progressRef.current.classList.add("hidden");
                    progressBarRef.current.style.width = `${20 * totalQuantity}%`;
                    setDiscountConNum(3 - totalQuantity);
                    setNextDiscount("10% OFF + FREE SHIPPING");
                }
            } else {
            }
            const totalInitPrice = cartItems.reduce((prev, cartItem) => prev + cartItem.price * cartItem.quantity, 0);
            setTotalInitPrice(totalInitPrice);
            const totalReduced = (totalInitPrice * dPer) / 100;
            setTotalReduced(totalReduced);
            const shippingPrice = totalQuantity < 3 ? 9 : 0;
            setShippingPrice(shippingPrice);
            const subTotal = totalInitPrice - totalReduced + shippingPrice;
            setSubTotal(subTotal);
        },
        [cartItems, dPer],
    );

    useEffect(() => {
        handleCart(totalQuantity);
    }, [totalQuantity, handleCart]);

    return (
        <>
            <CartDetails dispatch={dispatch} dPer={dPer} />
            <div className="progress-wrapper">
                <p className="progress" ref={progressRef}>
                    You get <b style={{ fontWeight: "bold" }}>{dPer}% OFF + FREE SHIPPING!</b>
                </p>
                <div className="progress-bar">
                    <div ref={progressBarRef}></div>
                </div>
                <p className="progress-text" ref={nextDiscountRef}>
                    You are <b style={{ fontWeight: "bold" }}>{discountConNum}</b> products away from{" "}
                    <b style={{ fontWeight: "bold" }}>{nextDiscount}</b>!
                </p>
            </div>
            <ul className="price-details-list">
                <li className="price-details-item">
                    <span className="price-details-label bold">Initial price:</span>
                    <span className="price-details-label light">${totalInitPrice}</span>
                </li>
                <li className="price-details-item">
                    <span className="price-details-label bold">Discount applied:</span>
                    <span className="price-details-label light colored">
                        {totalReduced === 0 ? "-" : `-$${totalReduced}`}
                    </span>
                </li>
                <li className="price-details-item">
                    <span className="price-details-label bold">Shipping:</span>
                    <span className="price-details-label light">${shippingPrice}</span>
                </li>
                <li className="price-details-item">
                    <span className="price-details-label bold">Subtotal:</span>
                    <span className="price-details-label light">${subTotal}</span>
                </li>
            </ul>
            <Btn btnClass="btn checkout-btn ease-orange-trans" re={"re-rendered"}>
                <span>GO TO CHECKOUT</span>
                <span>${subTotal}</span>
            </Btn>
        </>
    );
};

export default CartContent;
