import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Shipping from "../shipping/Shipping";
import Btn from "../../../../global-components/btn/Btn";
import "./Information.scss";

const Information = ({ setProcess, userCheckout, setInformationBtn, setShippingBtn, setPaymentBtn }) => {
    const newUserCheckOut = { ...userCheckout };
    const auth = getAuth();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("Vietnam");
    const [phone, setPhone] = useState("");
    const [valid, setValid] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
                setName(user.displayName);
            }
        });

        setAddress(newUserCheckOut.address);
        setPhone(newUserCheckOut.phone);
        setValid(newUserCheckOut.phoneValid);
    }, [auth, newUserCheckOut.address, newUserCheckOut.phone, newUserCheckOut.phoneValid]);

    const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    const onChange = (value) => {
        if (phoneRegex.test(value)) setValid(true);
        else setValid(false);
    };

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
                    value={address}
                    type={Text}
                ></input>
                <input
                    placeholder="Phone number"
                    className="checkout-input"
                    required
                    onChange={(e) => {
                        setPhone(e.target.value);
                        onChange(e.target.value);
                    }}
                    value={phone}
                    type={Number}
                ></input>
                <Btn
                    btnClass="btn move ease-trans-orange"
                    btnContent="Continue to shipping"
                    onClick={() => {
                        if (valid) {
                            setInformationBtn("");
                            setShippingBtn("active");
                            setPaymentBtn("");
                            newUserCheckOut.email = email;
                            newUserCheckOut.city = city;
                            newUserCheckOut.name = name;
                            newUserCheckOut.address = address;
                            newUserCheckOut.phone = phone;
                            newUserCheckOut.phoneValid = true;
                            setProcess(
                                <Shipping
                                    setProcess={setProcess}
                                    setInformationBtn={setInformationBtn}
                                    setShippingBtn={setShippingBtn}
                                    setPaymentBtn={setPaymentBtn}
                                    userCheckout={newUserCheckOut}
                                />,
                            );
                        } else alert("Invalid phone number!");
                    }}
                ></Btn>
            </form>
        </>
    );
};

export default Information;
