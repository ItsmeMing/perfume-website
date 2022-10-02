import { useEffect, useRef, useState } from "react";
import Btn from "../../../../../global-components/btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import feature1 from "./phone.webp";
import feature2 from "./dossier-club.webp";
import feature3 from "./america.avif";
import "./Features.scss";

function Features() {
    const leftArrow = useRef(null);
    const rightArrow = useRef(null);
    const slider = useRef(null);
    const [count, setCount] = useState(0);
    useEffect(() => {
        const checkCount = () => {
            if (count === 0) {
                leftArrow.current.classList.add("disabled");
            } else if (count === -2) {
                rightArrow.current.classList.add("disabled");
            } else {
                leftArrow.current.classList.remove("disabled");
                rightArrow.current.classList.remove("disabled");
            }
            slider.current.style.transform = `translateX(${count}00%)`;
        };
        checkCount();
    }, [count]);

    useEffect(() => {
        const checkWidth = () => {
            if (window.innerWidth > 768) {
                slider.current.removeAttribute("style");
            }
        };
        window.addEventListener("resize", checkWidth);

        // cleanup function
        return () => {
            window.removeEventListener("resize", checkWidth);
        };
    });

    return (
        <section className="features-container container g-0">
            <div className="features-list" ref={slider} style={{ transform: "translateX(0%)" }}>
                <div className="feature-item">
                    <img className="feature-img" src={feature1} alt=""></img>
                    <p className="feature">Sign up for text & get up to 20% OFF.</p>
                    <p className="feature-ins">Plus entry to win $500 in store credit.</p>
                </div>
                <div className="feature-item">
                    <img className="feature-img" src={feature2} alt=""></img>
                    <p className="feature">Want an exclusive offer?</p>
                    <p className="feature-ins">
                        Create a free Dossier Club account and start
                        <br />
                        earning money towards your next purchase!
                    </p>
                </div>
                <div className="feature-item">
                    <img className="feature-img" src={feature3} alt=""></img>
                    <p className="feature">Free shipping.</p>
                    <p className="feature-ins">On every order when you purchase 3+ items.</p>
                </div>
            </div>
            <Btn btnClass="btn fill-trans-orange" btnContent="JOIN THE DOSSIER CLUB"></Btn>
            <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="arrow left-a"
                ref={leftArrow}
                onClick={() => {
                    setCount(count + 1);
                }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="arrow right-a"
                ref={rightArrow}
                onClick={() => {
                    setCount(count - 1);
                }}
            ></FontAwesomeIcon>
        </section>
    );
}

export default Features;
