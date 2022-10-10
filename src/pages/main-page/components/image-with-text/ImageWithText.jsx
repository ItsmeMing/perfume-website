import TextLayout from "../../../../global-components/text-layout/TextLayout";
import icon1 from "./image_2021_09_09T17_26_42_989Z_1.webp";
import icon2 from "./image_rabit_1.webp";
import icon3 from "./image_2021_09_09T17_46_39_031Z_1.webp";
import bigimage1 from "./Familiar-_desktop_8c0762c5-b5de-4b35-a398-7b068c94147b.jpg";
import bigimage2 from "./Made-in-France.-_desktop.webp";
import "./ImageWithText.scss";

const ImageWithText = () => {
    return (
        <section className="image-with-text-container">
            <div className="image-with-text-wrapper">
                <p className="i-w-t-text">Familiar on the nose, safe for your body</p>
                <ul className="i-w-t-list">
                    <li className="i-w-t-item">
                        <img src={icon1} alt=""></img>
                        <p className="i-w-t-child-text">
                            Colorant
                            <br />& UV Filter Free
                        </p>
                    </li>
                    <li className="i-w-t-item">
                        <img src={icon2} alt=""></img>
                        <p className="i-w-t-child-text">
                            Vegan &<br />
                            Cruelty-free
                        </p>
                    </li>
                    <li className="i-w-t-item">
                        <img src={icon3} alt=""></img>
                        <p className="i-w-t-child-text">
                            Paraben &<br />
                            Phthalate-free
                        </p>
                    </li>
                </ul>
            </div>
            <div className="image-with-text-wrapper">
                <img src={bigimage1} alt=""></img>
            </div>
            <div className="image-with-text-wrapper">
                <TextLayout
                    firstText="The finest French ingredients."
                    secondText="We only source our scents from Grasse, the world’s perfume capital. Our products are made from clean ingredients for the best quality possible."
                    btnClass="btn fill-trans-orange"
                    btnContent="LEARN MORE"
                ></TextLayout>
            </div>
            <div className="image-with-text-wrapper">
                <img src={bigimage2} alt=""></img>
            </div>
        </section>
    );
};

export default ImageWithText;
