import "./Details.scss";

const Details = ({ product }) => {
    const CreateDetails = () => {
        return { __html: product.details.content };
    };
    return (
        <>
            <p className="details-title">{product.details.title}</p>
            <p className="details" dangerouslySetInnerHTML={CreateDetails()}></p>
        </>
    );
};

export default Details;
