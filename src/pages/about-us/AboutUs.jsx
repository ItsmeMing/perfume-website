import { useEffect } from "react";
import Missions from "./components/missions/Missions";
import Image from "./components/image/Image";
import About from "./components/about/About";
import "../main-page/components/slogan/Slogan.scss";
import "./AboutUs.scss";

const AboutUs = () => {
    //always start at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "About Us - Dossier Perfumes";
    }, []);
    return (
        <section className="about-us-container g-0">
            <section className="slogan-container container g-0">
                <p className="pronuciation">Premium quality, ethical, affordable perfume for all.</p>
                <p className="slogan">
                    Yes to smelling good.
                    <br /> No to overpaying.
                </p>
            </section>
            <Missions />
            <Image />
            <About />
        </section>
    );
};

export default AboutUs;