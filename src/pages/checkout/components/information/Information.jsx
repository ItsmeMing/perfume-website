import Shipping from "../shipping/Shipping";
import Btn from "../../../../global-components/btn/Btn";
import "./Information.scss";

const Information = ({ setProcess }) => {
    return (
        <>
            <form className="checkout-form">
                <h1 className="checkout-header">Contact information</h1>
                <input placeholder="Email" className="checkout-input" type="email" required></input>
            </form>
            <form className="checkout-form">
                <h1 className="checkout-header">Shipping address</h1>
                <select className="checkout-input">
                    <option value="Vietnam" selected>
                        Vietnam
                    </option>
                    <option value="United States">United States</option>
                </select>
                <div className="checkout-group">
                    <input placeholder="First name" className="checkout-input" required></input>
                    <input placeholder="Last name" className="checkout-input" required></input>
                </div>
                <input placeholder="Address" className="checkout-input" required></input>
                <div className="checkout-group">
                    <input placeholder="City" className="checkout-input" required></input>
                    <input placeholder="State" className="checkout-input" required></input>
                    <input
                        placeholder="ZIP Code"
                        className="checkout-input"
                        type={Number}
                        maxLength={5}
                        required
                    ></input>
                </div>
                <input placeholder="Phone number" className="checkout-input" required></input>
                <Btn
                    btnClass="btn move ease-trans-orange"
                    btnContent="Continue to shipping"
                    onClick={() => {
                        setProcess(<Shipping setProcess={setProcess} />);
                    }}
                ></Btn>
            </form>
            <p className="extra-message">
                By checking this box I consent to receive recurring automated marketing by text message through an
                automatic telephone dialing system. Consent is not a condition to purchase. Message and Data rate apply.
                Opt-Out by texting STOP.
            </p>
        </>
    );
};

export default Information;
