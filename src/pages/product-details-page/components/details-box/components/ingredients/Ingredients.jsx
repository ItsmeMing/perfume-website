import "./Ingredients.scss";

const Ingredients = ({ product }) => {
    return (
        <>
            <p>
                <b className="ingredients-title">
                    Ingredients: Vegan | Paraben & Phthalate-free | Colorant & UV Filter Free
                </b>
            </p>
            <p className="ingredients">{product.ingredients}</p>
        </>
    );
};

export default Ingredients;
