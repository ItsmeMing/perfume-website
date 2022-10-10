import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../../global-components/btn/Btn";
import "./Topnav.scss";

const Topnav = () => {
    //toggle discount
    const disBtn = useRef(null);
    const discount = useRef(null);
    const handleDisDetails = () => {
        disBtn.current.classList.add("blurred");
        setTimeout(() => {
            disBtn.current.classList.remove("blurred");
        }, 500);
        if (discount.current.classList.contains("disabled")) {
            discount.current.classList.remove("disabled");
            setTimeout(() => {
                discount.current.classList.toggle("active");
            }, 150);
        } else {
            discount.current.classList.toggle("active");
            setTimeout(() => {
                discount.current.classList.add("disabled");
            }, 500);
        }
    };
    return (
        <section className="topnav">
            <p ref={disBtn} className="discount" onClick={handleDisDetails}>
                Get up to <strong>20$ OFF</strong>
                <span className="dc-details">See details</span>
            </p>
            <p className="fs-condition">Free shipping on 3+ items</p>
            <section ref={discount} className="discount-details disabled">
                <FontAwesomeIcon
                    icon={faXmark}
                    className="exit-button"
                    onClick={() => {
                        if (discount.current.classList.contains("disabled")) {
                            discount.current.classList.remove("disabled");
                            setTimeout(() => {
                                discount.current.classList.toggle("active");
                            }, 150);
                        } else {
                            discount.current.classList.toggle("active");
                            setTimeout(() => {
                                discount.current.classList.add("disabled");
                            }, 500);
                        }
                    }}
                />
                <p className="dis-text">Buy more, save more.</p>
                <div className="d-conditions">
                    <ul className="b-con-list">
                        <li className="b-con-item">Buy.</li>
                        <li className="b-con-item">3 items from $78</li>
                        <li className="b-con-item">4 items from $99</li>
                        <li className="b-con-item">5+ items from $116</li>
                    </ul>
                    <ul className="d-rate-list">
                        <li className="d-rate-item">Get.</li>
                        <li className="d-rate-item">10% OFF</li>
                        <li className="d-rate-item">15% OFF</li>
                        <li className="d-rate-item">20% OFF</li>
                    </ul>
                </div>
                <p className="f-ship-con">Plus, get free shipping on 3+ items!</p>
                <Btn btnClass="btn fill-trans-white" btnContent="SHOP NOW"></Btn>
            </section>
        </section>
    );
};

export default Topnav;
