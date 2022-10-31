import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import CheckoutSuccess from "../checkout-success/CheckoutSuccess";
import Shipping from "../shipping/Shipping";
import Btn from "../../../../global-components/btn/Btn";
import cartSlice from "../../../../redux/cartSlice";
import "./Payment.scss";

const Payment = ({ setProcess, userCheckout, setInformationBtn, setShippingBtn, setPaymentBtn }) => {
    const dispatch = useDispatch();

    const newUserCheckout = { ...userCheckout };
    newUserCheckout.payment = "Cash on delivery";
    newUserCheckout.billing = "Same as shipping address";

    const handleCheckout = async (e) => {
        e.preventDefault();
        console.log(e);
        const temp = new Date();
        const date = temp.getDate();
        const month = temp.getMonth() + 1;
        const year = temp.getFullYear();
        newUserCheckout.createdAt = `${date}/${month}/${year}`;
        console.log(newUserCheckout);
        await fetch("http://localhost:3001/api/orders", {
            method: "POST",
            body: JSON.stringify(newUserCheckout),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => {
                dispatch(cartSlice.actions.deleteCartAll);
                setProcess(<CheckoutSuccess />);
            })
            .catch((err) => alert(err));
    };
    return (
        <>
            <div className="payment-information-wrapper">
                <div className="payment-information">
                    <p>Contact</p>
                    <span>{newUserCheckout.email}</span>
                </div>
                <div className="payment-information">
                    <p>Ship to</p>
                    <address>{newUserCheckout.address}</address>
                </div>
                <div className="payment-information">
                    <p>Method</p>
                    <span>
                        {newUserCheckout.shipping}
                        <span>${newUserCheckout.shippingPrice}</span>
                    </span>
                </div>
            </div>
            <form className="payment-form">
                <h1 className="payment-header">Payment</h1>
                <div className="payment-group">
                    <div className="payment-option">
                        <input id="cod" value="cod" name="radio" className="payment-input" type="radio" checked></input>
                        <label htmlFor="cod" className="payment-label">
                            Cash on delivery
                        </label>
                    </div>
                </div>
            </form>
            <form className="payment-form">
                <h1 className="payment-header">Billing address</h1>
                <div className="payment-group">
                    <div className="payment-option">
                        <input id="cod" value="cod" name="radio" className="payment-input" type="radio" checked></input>
                        <label htmlFor="cod" className="payment-label">
                            Same as shipping address
                        </label>
                    </div>
                </div>
            </form>
            <div className="process-btn-group">
                <span
                    onClick={() => {
                        setInformationBtn("");
                        setShippingBtn("active");
                        setPaymentBtn("");
                        setProcess(
                            <Shipping
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
                    btnContent="Checkout"
                    onClick={(e) => {
                        handleCheckout(e);
                    }}
                ></Btn>
            </div>
        </>
    );
};

export default Payment;
