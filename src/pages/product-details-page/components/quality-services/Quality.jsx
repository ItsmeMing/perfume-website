import icon1 from "../../../main-page/components/image-with-text/image_2021_09_09T17_26_42_989Z_1.webp";
import icon2 from "../../../main-page/components/image-with-text/image_rabit_1.webp";
import icon3 from "../../../main-page/components/image-with-text/image_2021_09_09T17_46_39_031Z_1.webp";
import "./Quality.scss";

const Quality = () => {
    return (
        <section className="quality-wrapper">
            <p className="quality-header">We're good for you</p>
            <ul className="quality-list">
                <li className="quality-item">
                    <img src={icon1} alt=""></img>
                    <p className="quality-child-text">
                        Colorant
                        <br />& UV Filter Free
                    </p>
                </li>
                <li className="quality-item">
                    <img src={icon2} alt=""></img>
                    <p className="quality-child-text">
                        Vegan &<br />
                        Cruelty-free
                    </p>
                </li>
                <li className="quality-item">
                    <img src={icon3} alt=""></img>
                    <p className="quality-child-text">
                        Paraben &<br />
                        Phthalate-free
                    </p>
                </li>
            </ul>
        </section>
    );
};

export default Quality;
