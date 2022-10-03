import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderr = () => {
    const [slides, setSlides] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/api/sliders")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setSlides(data);
            });
    }, []);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="slider">
            <Container className="slider-container g-0">
                <Slider {...settings} className="slider-wrapper">
                    {slides &&
                        slides.map((slide, key) => (
                            <div key={key} className="slide">
                                <p className="slide-text">{slide.text}</p>
                                <img src={slide.brandimg} alt="brand-img" className="slide-img"></img>
                            </div>
                        ))}
                </Slider>
            </Container>
        </section>
    );
}

export default Sliderr;
