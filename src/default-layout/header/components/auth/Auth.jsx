import { Fragment, useState, useEffect } from "react";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    onAuthStateChanged,
} from "firebase/auth";
import Input from "../../../../global-components/input/Input";
import Btn from "../../../../global-components/btn/Btn";
import "./Auth.scss";

const Auth = (props) => {
    const { authen } = props;
    const auth = getAuth();

    //remove auth-form
    const removeAuth = () => {
        authen.current.classList.remove("active");
    };

    const [form, setForm] = useState();

    useEffect(() => {
        const token = localStorage.getItem("Auth-token");
        if (token !== null) {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    const name = user.displayName;
                    setForm(<User name={name} />);
                }
            });
        } else {
            setForm(<Login setForm={setForm} auth={auth} />);
        }
    }, []);

    return (
        <section className="auth-container" ref={authen}>
            {form}
            <Btn btnClass="btn ease-orange-trans auto-width" btnContent="EXIT" onClick={removeAuth}></Btn>
        </section>
    );
};

const Signup = ({ setForm, auth }) => {
    //signup's state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [rEmail, setREmail] = useState("");
    const [rPassword, setRPassword] = useState("");

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, rEmail, rPassword)
            .then((res) => {
                localStorage.setItem("Auth-token", res._tokenResponse.refreshToken);
                updateProfile(auth.currentUser, { displayName: firstName + " " + lastName }).then(() => {
                    onAuthStateChanged(auth, (user) => {
                        if (user) {
                            const name = user.displayName;
                            setForm(<User name={name} />);
                        }
                    });
                });
            })
            .catch((err) => console.log(typeof err));
    };

    return (
        <Fragment>
            <p className="auth-title">Hi! Enter info below to sign up</p>
            <p
                className="auth-btn"
                onClick={() => {
                    setForm(<Login setForm={setForm} auth={auth} />);
                }}
            >
                Or <strong>Login</strong>
            </p>
            <form className="form-container signup">
                <Input
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className="form-item light-brown"
                    type="text"
                ></Input>
                <Input
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className="form-item light-brown"
                    type="text"
                ></Input>
                <Input
                    onChange={(e) => setREmail(e.target.value)}
                    placeholder="Email"
                    className="form-item light-brown"
                    type="email"
                ></Input>
                <Input
                    onChange={(e) => setRPassword(e.target.value)}
                    placeholder="Password"
                    className="form-item light-brown"
                    type="password"
                ></Input>
            </form>
            <Btn btnClass="btn ease-orange-trans" btnContent="SIGN UP" onClick={handleSignUp}></Btn>
        </Fragment>
    );
};

const Login = ({ setForm, auth }) => {
    const [uEmail, setUEmail] = useState("");
    const [uPassword, setUPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, uEmail, uPassword)
            .then((userCredential) => {
                const token = userCredential.user.accessToken;
                localStorage.setItem("Auth-token", token);
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        const name = user.displayName;
                        setForm(<User name={name} auth={auth} />);
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Fragment>
            <p className="auth-title">Hi! Please enter your email.</p>
            <p
                className="auth-btn"
                onClick={() => {
                    setForm(<Signup setForm={setForm} auth={auth} />);
                }}
            >
                Or <strong>Create an account</strong>
            </p>
            <form className="form-container">
                <Input
                    placeholder="Email"
                    className="form-item light-brown"
                    type="email"
                    onChange={(e) => setUEmail(e.target.value)}
                ></Input>
                <Input
                    placeholder="Password"
                    className="form-item light-brown"
                    type="password"
                    onChange={(e) => setUPassword(e.target.value)}
                ></Input>
                <Btn
                    btnClass="btn ease-orange-trans"
                    btnContent="LOGIN"
                    onClick={(e) => {
                        handleLogin(e);
                    }}
                ></Btn>
            </form>
        </Fragment>
    );
};

const User = ({ name }) => {
    return (
        <>
            <h1 className="welcome">Welcome, {name}</h1>
        </>
    );
};

export default Auth;
