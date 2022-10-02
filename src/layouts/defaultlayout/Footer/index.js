import { Fragment } from "react";
import Btn from "../../../global-components/btn/Btn";
import { Container } from "react-bootstrap";
import { faInstagram, faPinterestP, faFacebookF, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.scss";
import logo from "../assets/images/logo.webp";

function Footer() {
    return (
        <Fragment>
            <footer className="footer">
                <Container className="container g-0">
                    <div className="l-footer">
                        <img src={logo} alt="logo" className="logo"></img>
                        <p className="l-f-text">Be the first to know</p>
                        <p className="l-f-text-su">Sign up for exclusive Dossier email and offers.</p>
                        <form className="email-form">
                            <input className="email-input" placeholder="Enter email address."></input>
                            <Btn btnClass="btn fill-trans-orange" btnContent="SUBMIT"></Btn>
                        </form>
                        <div className="footer-contact">
                            <FontAwesomeIcon icon={faInstagram} className="c-icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faPinterestP} className="c-icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faFacebookF} className="c-icon"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTiktok} className="c-icon"></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="r-footer">
                        <ul className="f-list">
                            <li className="f-list-item">Help.</li>
                            <li className="f-list-item">Contact Us</li>
                            <li className="f-list-item">Returns</li>
                            <li className="f-list-item">FAQ</li>
                            <li className="f-list-item">Accessibility</li>
                        </ul>
                        <ul className="f-list">
                            <li className="f-list-item">More.</li>
                            <li className="f-list-item">Pay With Catch</li>
                            <li className="f-list-item">Perfume Blog</li>
                            <li className="f-list-item">Index</li>
                        </ul>
                    </div>
                </Container>
                <section className="bot-footer">
                    <p className="b-f-text">Privacy Policy</p>
                    <p className="b-f-text">Terms & Conditions</p>
                    <p className="b-f-text">© 2022 All Rights Reserved</p>
                </section>
            </footer>
        </Fragment>
    );
}

export default Footer;
