import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import Information from "../information/Information";
import Payment from "../payment/Payment";
import "../shipping/Shipping.scss";

const Shipping = ({ setProcess, information }) => {
    const newInformation = { ...information };

    return (
        <>
            <div className="shipping-information-wrapper">
                <div className="shipping-information">
                    <p> Contact</p>
                    <span>{newInformation.email}</span>
                </div>
                <div className="shipping-information">
                    <p>Ship to</p>
                    <address>192 Hàm Tử</address>
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
                            onClick={() => (newInformation.shipping = "ground")}
                        ></input>
                        <label
                            htmlFor="ground"
                            className="shipping-label"
                            onClick={() => (newInformation.shipping = "ground")}
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
                            onClick={() => (newInformation.shipping = "plane")}
                        ></input>
                        <label
                            htmlFor="plane"
                            className="shipping-label"
                            onClick={() => (newInformation.shipping = "plane")}
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
                        setProcess(<Information setProcess={setProcess} />);
                    }}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Return to information
                </span>
                <Btn
                    btnClass="btn move ease-trans-orange"
                    btnContent="Continue to payment"
                    onClick={() => {
                        setProcess(<Payment setProcess={setProcess} information={newInformation} />);
                        console.log(newInformation);
                    }}
                ></Btn>
            </div>
        </>
    );
};

export default Shipping;
