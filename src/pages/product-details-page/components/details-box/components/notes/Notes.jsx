import "./Notes.scss";

const Notes = ({ product }) => {
    return (
        <>
            <div className="note-item">
                <span>TOP - The first notes you smell</span>
                <p>{product.smells.top}</p>
            </div>
            <div className="note-item">
                <span>MIDDLE - The heart of perfume</span>
                <p>{product.smells.middle}</p>
            </div>
            <div className="note-item">
                <span>BASE - The notes that linger all day</span>
                <p>{product.smells.base}</p>
            </div>
        </>
    );
};

export default Notes;
