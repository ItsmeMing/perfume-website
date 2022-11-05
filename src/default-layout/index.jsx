import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./index.scss";

const DefaultLayout = ({ children }) => {
    return (
        <Fragment>
            <Header></Header>
            <Container fluid className="g-0" id="content">
                {children}
            </Container>
            <Footer></Footer>
        </Fragment>
    );
};

export default DefaultLayout;
