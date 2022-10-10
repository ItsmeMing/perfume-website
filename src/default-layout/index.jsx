import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const DefaultLayout = ({ children }) => {
    return (
        <Fragment>
            <Header></Header>
            <Container fluid className="g-0">
                {children}
            </Container>
            <Footer></Footer>
        </Fragment>
    );
};

export default DefaultLayout;
