import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "./Slider.scss";

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

    // const swiper = new Swiper(".swiper", {
    //     // Default parameters
    //     slidesPerView: 1,
    //     // Responsive breakpoints
    //     breakpoints: {
    //         // when window width is >= 576px
    //         //   576: {
    //         //     slidesPerView: 1,
    //         //   },
    //         // when window width is >= 768px
    //         768: {
    //             slidesPerView: 2,
    //         },
    //         // when window width is >= 640px
    //         //   992: {
    //         //     slidesPerView: 2,
    //         //   },
    //         1200: {
    //             slidesPerView: 3,
    //         },
    //         1400: {
    //             slidesPerView: 4,
    //         },
    //     },
    // });

    return (
        <section className="slider">
            <Container className="slider-container g-0">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    }}
                    className="slider-wrapper"
                >
                    {slides &&
                        slides.map((slide, key) => (
                            <SwiperSlide key={key} className="slide">
                                <p className="slide-text">{slide.text}</p>
                                <img src={slide.brandimg} alt="brand-img" className="slide-img"></img>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Sliderr;
