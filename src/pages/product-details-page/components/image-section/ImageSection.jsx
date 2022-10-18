import "./ImageSection.scss";

const ImageSection = ({ product }) => {
    return (
        <>
            <ul className="image-list">
                <li className="image-item">
                    <img src={product.productimg} alt=""></img>
                </li>
                <li className="image-item">
                    <img src={product.productimg2} alt=""></img>
                </li>
                <li className="image-item">
                    <img src={product.productimg3} alt=""></img>
                </li>
                <li className="image-item">
                    <img src={product.productimg4} alt=""></img>
                </li>
                <li className="image-item">
                    <img src={product.productimghover} alt=""></img>
                </li>
            </ul>
            <div className="image-slider">
                <img className="image" src={product.productimg} alt=""></img>
                <img className="image" src={product.productimg2} alt=""></img>
                <img className="image" src={product.productimg3} alt=""></img>
                <img className="image" src={product.productimg4} alt=""></img>
                <img className="image" src={product.productimghover} alt=""></img>
            </div>
        </>
    );
};

export default ImageSection;
