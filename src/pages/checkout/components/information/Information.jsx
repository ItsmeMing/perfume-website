import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Shipping from "../shipping/Shipping";
import Btn from "../../../../global-components/btn/Btn";
import "./Information.scss";

const Information = ({ setProcess, information, setInformationBtn, setShippingBtn, setPaymentBtn }) => {
    const auth = getAuth();
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [phone, setPhone] = useState();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setEmail(user.email);
            setName(user.displayName);
        }
    });
    const userInformation = { email: email, name: name, address: address, phone: phone, city: city };
    const newInformation = { ...information, ...userInformation };
    return (
        <>
            <form className="checkout-form">
                <h1 className="checkout-header">Contact information</h1>
                <input placeholder="Email" className="checkout-input" type="email" disabled value={email}></input>
            </form>
            <form className="checkout-form">
                <h1 className="checkout-header">Shipping address</h1>
                <select className="checkout-input" onChange={(e) => setCity(e.target.value)} value="Vietnam">
                    <option value="Vietnam">Vietnam</option>
                    <option value="United States">United States</option>
                </select>
                <input placeholder="Name" className="checkout-input" value={name} disabled></input>
                <input
                    placeholder="Address"
                    className="checkout-input"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                ></input>
                <input
                    placeholder="Phone number"
                    className="checkout-input"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                ></input>
                <Btn
                    btnClass="btn move ease-trans-orange"
                    btnContent="Continue to shipping"
                    onClick={() => {
                        setInformationBtn("");
                        setShippingBtn("active");
                        setPaymentBtn("");
                        setProcess(<Shipping setProcess={setProcess} information={newInformation} />);
                        console.log(newInformation);
                    }}
                ></Btn>
            </form>
        </>
    );
};

export default Information;
