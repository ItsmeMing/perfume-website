import { useCallback } from "react";
import { useRef, useEffect } from "react";
import "./ImageSection.scss";

const ImageSection = ({ product }) => {
    const slider = useRef(null);
    const curImg = useRef(null);
    let transPer = useRef(0);
    const temp = useRef(0);

    const handleCurrentImage = useCallback((index) => {
        temp.current = index;
        transPer.current = 100 * index;
        slider.current.style.transform = `translateX(-${transPer.current}%)`;
        const curImgWidth = window.getComputedStyle(curImg.current).getPropertyValue("width");
        const width = curImgWidth.slice(0, curImgWidth.length - 2);
        const curImgMBottom = window.getComputedStyle(curImg.current).getPropertyValue("margin-bottom");
        const marginBottom = curImgMBottom.slice(0, curImgMBottom.length - 2);
        const topValue = (parseInt(width) + parseInt(marginBottom)) * index;
        curImg.current.style.top = `${topValue}px`;
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            handleCurrentImage(temp.current);
            if (temp.current === Object.keys(product.images).length - 1) temp.current = 0;
            else temp.current++;
        }, 2000);
        const checkWidth = () => {
            if (window.innerWidth >= 768) {
                setTimeout(handleCurrentImage(temp.current), 1000);
            }
        };
        window.addEventListener("resize", checkWidth);
        // cleanup function
        return () => {
            window.removeEventListener("resize", checkWidth);
            clearInterval(interval);
        };
    }, [handleCurrentImage, product.images]);
    return (
        <>
            <ul className="image-list">
                {product.images &&
                    Object.keys(product.images).map((img, index) => {
                        return (
                            <li
                                key={index}
                                className="image-item"
                                onClick={() => {
                                    handleCurrentImage(index);
                                }}
                            >
                                <img src={product.images[img]} alt=""></img>
                            </li>
                        );
                    })}
                <div className="current-image" style={{ top: "0" }} ref={curImg}></div>
            </ul>
            <div className="image-slider-wrapper">
                <div className="image-slider" ref={slider} style={{ transform: "translateX(0%)" }}>
                    {product.images &&
                        Object.keys(product.images).map((img, index) => {
                            return <img key={index} className="image" src={product.images[img]} alt=""></img>;
                        })}
                </div>
            </div>
        </>
    );
};

export default ImageSection;
