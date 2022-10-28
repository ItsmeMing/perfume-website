import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import Information from "../information/Information";
import Payment from "../payment/Payment";
import "../shipping/Shipping.scss";
import { useEffect } from "react";

const Shipping = ({ setProcess, userCheckout, setInformationBtn, setShippingBtn, setPaymentBtn }) => {
    const newUserCheckout = { ...userCheckout };
    useEffect(() => {
        if (newUserCheckout.shipping === "Ground shipping")
            document.querySelector(".shipping-input#ground").checked = true;
        else if (newUserCheckout.shipping === "Plane shipping")
            document.querySelector(".shipping-input#plane").checked = true;
    }, [newUserCheckout.shipping]);

    return (
        <>
            <div className="shipping-information-wrapper">
                <div className="shipping-information">
                    <p> Contact</p>
                    <span>{newUserCheckout.email}</span>
                </div>
                <div className="shipping-information">
                    <p>Ship to</p>
                    <address>{newUserCheckout.address}</address>
                </div>
            </div>
            <form className="shipping-form">
                <h1 className="shipping-header">Shipping method</h1>
                <div className="shipping-group">
                    <div className="shipping-option">
                        <input
                            id="ground"
                            value="ground"
                            name="radio"
                            className="shipping-input"
                            type="radio"
                            onClick={() => (newUserCheckout.shipping = "Ground shipping")}
                        ></input>
                        <label
                            htmlFor="ground"
                            className="shipping-label"
                            onClick={() => (newUserCheckout.shipping = "Ground shipping")}
                        >
                            Ground Shipping
                        </label>
                        <span>Free</span>
                    </div>
                    <div className="shipping-option">
                        <input
                            id="plane"
                            value="plane"
                            name="radio"
                            className="shipping-input"
                            type="radio"
                            onClick={() => (newUserCheckout.shipping = "Plane shipping")}
                        ></input>
                        <label
                            htmlFor="plane"
                            className="shipping-label"
                            onClick={() => (newUserCheckout.shipping = "Plane shipping")}
                        >
                            Plane Shipping
                        </label>
                        <span>Free</span>
                    </div>
                </div>
                <p className="damage-protection">
                    *Things happen. Be worry free with Route and protect your order from loss, damage, and theft.
                </p>
            </form>
            <div className="process-btn-group">
                <span
                    onClick={() => {
                        setInformationBtn("active");
                        setShippingBtn("");
                        setPaymentBtn("");
                        setProcess(
                            <Information
                                setProcess={setProcess}
                                setInformationBtn={setInformationBtn}
                                setShippingBtn={setShippingBtn}
                                setPaymentBtn={setPaymentBtn}
                                userCheckout={newUserCheckout}
                            />,
                        );
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Return to information
                </span>
                <Btn
                    btnClass="btn move ease-trans-orange"
                    btnContent="Continue to payment"
                    onClick={() => {
                        setInformationBtn("");
                        setShippingBtn("");
                        setPaymentBtn("active");
                        setProcess(
                            <Payment
                                setProcess={setProcess}
                                userCheckout={newUserCheckout}
                                setInformationBtn={setInformationBtn}
                                setShippingBtn={setShippingBtn}
                                setPaymentBtn={setPaymentBtn}
                            />,
                        );
                    }}
                ></Btn>
            </div>
        </>
    );
};

export default Shipping;
