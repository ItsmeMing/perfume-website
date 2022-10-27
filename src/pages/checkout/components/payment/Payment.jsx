import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Shipping from "../shipping/Shipping";
import Btn from "../../../../global-components/btn/Btn";
import "./Payment.scss";

const Payment = ({ setProcess, information }) => {
    const newInformation = { ...information };
    newInformation.payment = "Cash on delivery";
    newInformation.billing = "Same as shipping address";
    console.log(newInformation);
    return (
        <>
            <div className="payment-information-wrapper">
                <div className="payment-information">
                    <p> Contact</p>
                    <span>ngocminh.vu.520@gmail.com</span>
                </div>
                <div className="payment-information">
                    <p>Ship to</p>
                    <address>192 Hàm Tử</address>
                </div>
                <div className="payment-information">
                    <p>Method</p>
                    <span>
                        Ground shipping<span>Free</span>
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
                        setProcess(<Shipping setProcess={setProcess} />);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Return to information
                </span>
                <Btn btnClass="btn move ease-trans-orange" btnContent="Checkout"></Btn>
            </div>
        </>
    );
};

export default Payment;
