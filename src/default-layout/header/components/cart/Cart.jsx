import { useSelector, useDispatch } from "react-redux";
import CartContent from "./components/cart-content/CartContent";
import Btn from "../../../../global-components/btn/Btn";
import "./Cart.scss";

const Cart = ({ cart, authen }) => {
    const loginStatus = useSelector((state) => state.user).logged;
    const dispatch = useDispatch();

    //remove cart
    const removeCart = () => {
        cart.current.classList.remove("active");
    };

    const handleLogin = () => {
        removeCart();
        authen.current.classList.add("active");
    };

    return (
        <section className="cart-container" ref={cart}>
            <div className="cart-wrapper">
                <p className="cart-title">Your cart.</p>
                <Btn btnClass="btn custom ease-orange-trans" btnContent="Close" onClick={removeCart}></Btn>
            </div>
            {loginStatus === "true" ? (
                <CartContent dispatch={dispatch} />
            ) : (
                <div className="login-warning">
                    <p className="warning">Please log in in order to use this function</p>
                    <Btn btnClass="btn login ease-orange-trans" btnContent="LOG IN" onClick={handleLogin} />
                </div>
            )}
        </section>
    );
};

export default Cart;
