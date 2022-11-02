import { Row, Col } from "react-bootstrap";
import "./Advers.scss";

const Advers = () => {
    return (
        <section className="advers-container g-0">
            <Row className="g-0">
                <Col lg={6} md={12} xs={12}>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/Team-clean-_Desktop.jpg?v=1631216909"
                        alt=""
                    ></img>
                </Col>
                <Col lg={6} md={12} xs={12}>
                    <article className="adver-text-wrapper">
                        <h1 className="adver-header">Team clean.</h1>
                        <p className="adver-text">
                            Fragrance reflects who you are. At Dossier, we want our perfumes to do more than make you
                            feel good. We want them to be good. For you and for the planet.
                        </p>
                        <p className="adver-text">
                            We follow strict U.S. and E.U. cosmetic safety recommendations when formulating our
                            products, which are ethical, sustainable, and sourced from the highest quality ingredients.
                            Our vegan and eco-friendly fragrances are 100% non-toxic and cruelty-free so you can indulge
                            guilt-free.
                        </p>
                    </article>
                </Col>
            </Row>
            <Row className="g-0">
                <Col lg={6} md={12} xs={12}>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0047/4067/7699/files/Team-green-_Desktop.jpg?v=1631216954"
                        alt=""
                    ></img>
                </Col>
                <Col lg={6} md={12} xs={12}>
                    <article className="adver-text-wrapper">
                        <h1 className="adver-header">Team green.</h1>
                        <p className="adver-text">
                            We’ve also nailed the packaging. We use recyclable, environmentally friendly materials for
                            our packaging which helps our planet and saves you money. Win-win!
                        </p>
                        <p className="adver-text">
                            All our returned perfumes are donated to charity for a fully eco-friendly and ethical sales
                            process.
                        </p>
                    </article>
                </Col>
            </Row>
        </section>
    );
};

export default Advers;
