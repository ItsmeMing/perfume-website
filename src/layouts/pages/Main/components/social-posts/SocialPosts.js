import { Col, Row } from "react-bootstrap";
import sp1 from "./social-post-1.jpg";
import sp2 from "./social-post-2.jpg";
import sp3 from "./social-post-3.jpg";
import sp4 from "./social-post-4.jpg";
import "./SocialPosts.scss";

function SocialPosts() {
    return (
        <section className="social-posts-container container g-0">
            <Row className="g-0">
                <Col className="social-post-wrapper" md={3} xs={6}>
                    <img className="social-post-imt" src={sp1} alt=""></img>
                </Col>
                <Col className="social-post-wrapper" md={3} xs={6}>
                    <img className="social-post-imt" src={sp2} alt=""></img>
                </Col>
                <Col className="social-post-wrapper" md={3} xs={6}>
                    <img className="social-post-imt" src={sp3} alt=""></img>
                </Col>
                <Col className="social-post-wrapper" md={3} xs={6}>
                    <img className="social-post-imt" src={sp4} alt=""></img>
                </Col>
            </Row>
        </section>
    );
}

export default SocialPosts;
