import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    updateProfile,
    onAuthStateChanged,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import Input from "../../../../global-components/input/Input";
import Btn from "../../../../global-components/btn/Btn";
import userSlice from "../../../../redux/userSlice";
import "./Auth.scss";

const Auth = ({ authen, setLoginState }) => {
    const auth = getAuth();
    const dispatch = useDispatch();

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
                    setForm(<User name={name} setForm={setForm} auth={auth} authen={authen} />);
                    dispatch(userSlice.actions.enableLoginStatus(name));
                }
            });
        } else {
            setForm(<Login setForm={setForm} auth={auth} setLoginState={setLoginState} />);
        }
    }, [auth, dispatch, setLoginState, authen]);

    return (
        <section className="auth-container" ref={authen}>
            {form}
            <Btn btnClass="btn ease-orange-trans auto-width" btnContent="EXIT" onClick={removeAuth}></Btn>
        </section>
    );
};

const Signup = ({ setForm, auth, setLoginState, authen }) => {
    const dispatch = useDispatch();

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
                            setForm(
                                <User
                                    name={name}
                                    setForm={setForm}
                                    auth={auth}
                                    setLoginState={setLoginState}
                                    authen={authen}
                                />,
                            );
                            setLoginState(name);
                            dispatch(userSlice.actions.enableLoginStatus(name));
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
                    setForm(<Login setForm={setForm} auth={auth} setLoginState={setLoginState} />);
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

const Login = ({ setForm, auth, setLoginState, authen }) => {
    const dispatch = useDispatch();

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
                        setForm(
                            <User
                                name={name}
                                setForm={setForm}
                                auth={auth}
                                setLoginState={setLoginState}
                                authen={authen}
                            />,
                        );
                        setLoginState(name);
                        dispatch(userSlice.actions.enableLoginStatus(name));
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
                    setForm(<Signup setForm={setForm} auth={auth} setLoginState={setLoginState} />);
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

const User = ({ name, setForm, auth, setLoginState, authen }) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        localStorage.removeItem("Auth-token");
        setForm(<Login setForm={setForm} auth={auth} setLoginState={setLoginState} authen={authen} />);
        setLoginState("Log In");
        dispatch(userSlice.actions.disableLoginStatus());
    };
    return (
        <>
            <h1 className="welcome">
                Welcome, <b>{name}</b>
            </h1>
            <Link
                to="/your-orders"
                onClick={() => {
                    authen.current.classList.remove("active");
                }}
            >
                <p className="user-orders">Orders</p>
            </Link>
            <Btn btnClass="btn logout fill-trans-orange" btnContent="Sign out" onClick={handleLogout}></Btn>
        </>
    );
};

export default Auth;
