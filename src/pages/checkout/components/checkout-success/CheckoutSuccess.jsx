import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import "./CheckoutSuccess.scss";

const CheckoutSuccess = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000);
    }, [navigate]);

    return (
        <div className="checkout-success-wrapper">
            <FontAwesomeIcon icon={faCircleCheck} className="checked-icon" />
            <h1 className="success-header">SUCCESS</h1>
            <p className="success-text">You will be redirected...</p>
        </div>
    );
};

export default CheckoutSuccess;
