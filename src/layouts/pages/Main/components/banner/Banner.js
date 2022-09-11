import { Fragment } from "react";
import { Container } from "react-bootstrap";
import "./Banner.scss";
import video from "./HP_Banner_Final_Mov.mp4";

function Banner() {
    return (
        <Fragment>
            <Container className="banner-container g-0">
                <video
                    width="100%"
                    // controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                >
                    <source src={video} type="video/mp4"></source>
                </video>
                <section className="banner-content">
                    <p className="slogan">The fair alternative to luxury perfumes.</p>
                    <p className="b-text">
                        Scents inspired by Tom Ford, Creed, Baccarat Rouge 540, Le Labo & many more, from $29
                    </p>
                    <button className="b-button">SHOP PERFUMES</button>
                </section>
            </Container>
        </Fragment>
    );
}

export default Banner;
