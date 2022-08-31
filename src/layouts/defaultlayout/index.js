import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
    return (
        <Fragment>
            <Header></Header>
            <Container fluid>{children}</Container>
            <Footer></Footer>
        </Fragment>
    );
}

export default DefaultLayout;
