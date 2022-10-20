import { Fragment, useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";
import Input from "../../../../global-components/input/Input";
import Btn from "../../../../global-components/btn/Btn";
import "./Auth.scss";

const Auth = (props) => {
    const { auth } = props;
    const [login, setLogin] = useState(true);

    //remove auth-form
    const removeAuth = () => {
        auth.current.classList.remove("active");
    };

    //login's state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //signup's state
    const [rEmail, setREmail] = useState("");
    const [rPassword, setRPassword] = useState("");

    const handleLogIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((auth) => console.log(auth))
            .catch((err) => console.log(err));
    };

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, rEmail, rPassword)
            .then((auth) => console.log(auth))
            .catch((err) => console.log(err));
    };
    return (
        <section className="auth-container" ref={auth}>
            {login ? (
                <Login setLogin={setLogin} setEmail={setEmail} setPassword={setPassword} />
            ) : (
                <Signup setLogin={setLogin} setREmail={setREmail} setRPassword={setRPassword} onSignUp={handleSignUp} />
            )}
            <Btn btnClass="btn ease-orange-trans auto-width" btnContent="EXIT" onClick={removeAuth}></Btn>
        </section>
    );
};

const Signup = (props) => {
    const { setLogin } = props;
    return (
        <Fragment>
            <p className="auth-title">Hi! Enter info below to sign up</p>
            <p
                className="auth-btn"
                onClick={() => {
                    setLogin(true);
                }}
            >
                Or <strong>Login</strong>
            </p>
            <form className="form-container signup">
                <Input placeholder="First name" className="form-item light-brown" type="text"></Input>
                <Input placeholder="Last name" className="form-item light-brown" type="text"></Input>
                <Input
                    onChange={(e) => props.setREmail(e.target.value)}
                    placeholder="Email"
                    className="form-item light-brown"
                    type="email"
                ></Input>
                <Input
                    onChange={(e) => props.setRPassword(e.target.value)}
                    placeholder="Password"
                    className="form-item light-brown"
                    type="password"
                ></Input>
            </form>
            <Btn btnClass="btn ease-orange-trans" btnContent="SIGN UP" onClick={props.onSignUp}></Btn>
        </Fragment>
    );
};

const Login = (props) => {
    const { setLogin } = props;
    return (
        <Fragment>
            <p className="auth-title">Hi! Please enter your email.</p>
            <p
                className="auth-btn"
                onClick={() => {
                    setLogin(false);
                }}
            >
                Or <strong>Create an account</strong>
            </p>
            <form className="form-container">
                <Input
                    placeholder="Email"
                    className="form-item light-brown"
                    type="email"
                    onChange={(e) => props.setEmail(e.target.value)}
                ></Input>
                <Input placeholder="Password" className="form-item light-brown" type="password"></Input>
                <Btn btnClass="btn ease-orange-trans" btnContent="LOGIN"></Btn>
            </form>
        </Fragment>
    );
};

export default Auth;
