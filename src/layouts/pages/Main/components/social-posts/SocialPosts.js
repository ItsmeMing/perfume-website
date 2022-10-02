import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";
import sp1 from "./social-post-1.jpg";
import sp2 from "./social-post-2.jpg";
import sp3 from "./social-post-3.jpg";
import sp4 from "./social-post-4.jpg";
import "./SocialPosts.scss";

function SocialPosts() {
    const socialPost1 = useRef(null);
    const socialPost2 = useRef(null);
    const socialPost3 = useRef(null);
    const socialPost4 = useRef(null);
    useEffect(() => {
        const setHeight = () => {
            socialPost1.current.style.height = `${window.getComputedStyle(socialPost1.current).width}`;
            socialPost2.current.style.height = `${window.getComputedStyle(socialPost1.current).width}`;
            socialPost3.current.style.height = `${window.getComputedStyle(socialPost1.current).width}`;
            socialPost4.current.style.height = `${window.getComputedStyle(socialPost1.current).width}`;
        }
        setHeight();
        window.addEventListener("resize", setHeight);
        // cleanup function
        return () => {
            window.removeEventListener("resize", setHeight);
        };
    }, [])

    return (
        <section className="social-posts-container">
            <Row className="g-0">
                <Col className="social-post-wrapper" md={3} xs={6} ref={socialPost1}>
                    <img className="social-post-img" src={sp1} alt=""></img>
                    <a href="https://www.instagram.com/p/CjB49rwuRP1/" target="_blank" rel="noreferrer" className="social-post-overlay">
                        <FontAwesomeIcon icon={faInstagram} className="ins-icon"></FontAwesomeIcon>
                    </a>
                </Col>
                <Col className="social-post-wrapper" md={3} xs={6} ref={socialPost2}>
                    <img className="social-post-img" src={sp2} alt=""></img>
                    <a href="https://www.instagram.com/p/Ci3P_FlIHhz/" target="_blank" rel="noreferrer" className="social-post-overlay">
                        <FontAwesomeIcon icon={faInstagram} className="ins-icon"></FontAwesomeIcon>
                    </a>
                </Col>
                <Col className="social-post-wrapper" md={3} xs={6} ref={socialPost3}>
                    <img className="social-post-img" src={sp3} alt=""></img>
                    <a href="https://www.instagram.com/p/CiyE_NTKcXb/" target="_blank" rel="noreferrer" className="social-post-overlay">
                        <FontAwesomeIcon icon={faInstagram} className="ins-icon"></FontAwesomeIcon>
                    </a>
                </Col>
                <Col className="social-post-wrapper" md={3} xs={6} ref={socialPost4}>
                    <img className="social-post-img" src={sp4} alt=""></img>
                    <a href="https://www.instagram.com/p/CiVOHudOYG5/" target="_blank" rel="noreferrer" className="social-post-overlay">
                        <FontAwesomeIcon icon={faInstagram} className="ins-icon"></FontAwesomeIcon>
                    </a>
                </Col>
            </Row>
        </section>
    );
}

export default SocialPosts;
