import { Fragment } from "react";
import { Container } from "react-bootstrap";
import "./Slogan.scss";

const Slogan = () => {
    return (
        <Fragment>
            <Container className="slogan-container g-0">
                <p className="pronuciation">DOSSIER (noun) - pronounced "dAH - sEE - ay"</p>
                <p className="slogan">
                    We believe everyone
                    <br /> deserves to smell
                    <br />
                    like luxury.
                </p>
            </Container>
        </Fragment>
    );
}

export default Slogan;
