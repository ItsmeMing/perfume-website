import "./About.scss";

const AboutItem = ({ imgurl, title, details }) => {
    return (
        <div className="about-item">
            <div className="about-text-wrapper">
                <img src={imgurl} alt="" className="about-img" />
                <p className="about-title">{title}</p>
            </div>
            <p className="about-details">{details}</p>
        </div>
    );
};

export default AboutItem;
