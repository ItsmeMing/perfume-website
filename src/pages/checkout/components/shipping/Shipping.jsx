import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import "../shipping/Shipping.scss";
import Information from "../information/Information";
import Payment from "../payment/Payment";

const Shipping = ({ setProcess }) => {
    return (
        <>
            <div className="shipping-information-wrapper">
                <div className="shipping-information">
                    <p> Contact</p>
                    <span>ngocminh.vu.520@gmail.com</span>
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
                        <input id="ground" value="ground" name="radio" className="shipping-input" type="radio"></input>
                        <label htmlFor="ground" className="shipping-label">
                            Ground Shipping
                        </label>
                        <span>Free</span>
                    </div>
                    <div className="shipping-option">
                        <input id="plane" value="plane" name="radio" className="shipping-input" type="radio"></input>
                        <label htmlFor="plane" className="shipping-label">
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
                    onClick={() => setProcess(<Payment setProcess={setProcess} />)}
                ></Btn>
            </div>
        </>
    );
};

export default Shipping;
