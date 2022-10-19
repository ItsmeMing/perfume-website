import "./About.scss";

const About = ({ concentration, gender, about }) => {
    const CreateAbout = () => {
        return { __html: about };
    };
    return (
        <>
            <p className="small bold concentration">Concentration: {concentration}%</p>
            <p className="small bold gender">
                Gender: <span>{gender}</span>
            </p>
            <p className="small bold ingredients-tag">Vegan | Cruelty-free | Clean ingredients</p>
            <p className="small about" dangerouslySetInnerHTML={CreateAbout()}></p>
        </>
    );
};

export default About;
