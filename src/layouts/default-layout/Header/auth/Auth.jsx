import { Fragment, useState } from "react";
import Input from "../../../../components/global-components/input/Input";
import Btn from "../../../../components/global-components/btn/Btn";
import "./Auth.scss"

const Cart = (props) => {
    const [login, setLogin] = useState(false)
    return (
        <section className="auth-container" ref={props.auth}>
            {login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} />}
        </section>
    )
}

const Signup = (props) => {
    const { setLogin } = props;
    return (
        <Fragment>
            <p className="auth-title">Hi! Enter info below to sign up</p>
            <p className="auth-btn" onClick={() => { setLogin(true) }}>Or <strong>Sign up</strong></p>
            <form className="form-container signup">
                <Input placeholder="First name" className="form-item light-brown" type="text"></Input>
                <Input placeholder="Last name" className="form-item light-brown" type="text"></Input>
                <Input placeholder="Email" className="form-item light-brown" type="email"></Input>
                <Input placeholder="Password" className="form-item light-brown" type="password"></Input>
            </form>
            <Btn btnClass="btn ease-orange-trans" btnContent="SIGN UP"></Btn>
        </Fragment>
    )
}

const Login = (props) => {
    const { setLogin } = props;
    return (
        <Fragment>
            <p className="auth-title">Hi! Please enter your email.</p>
            <p className="auth-btn" onClick={() => { setLogin(false) }}>Or <strong>Create an account</strong></p>
            <form className="form-container">
                <Input placeholder="Email" className="form-item light-brown" type="email"></Input>
                <Input placeholder="Password" className="form-item light-brown" type="password"></Input>
                <Btn btnClass="btn ease-orange-trans" btnContent="LOGIN"></Btn>
            </form>
        </Fragment>
    )
}

export default Cart;