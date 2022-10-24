import { useState } from "react";
import Btn from "../../../../../../global-components/btn/Btn";
import "./ReviewForm.scss";

const ReviewForm = ({ reviewFormRef }) => {
    const [title, setTitle] = useState(null);
    const [review, setReview] = useState(null);

    return (
        <div className="review-form-wrapper">
            <span className="form-header">WRITE A REVIEW</span>
            <form action="" method="POST" className="form">
                <label className="form-hint">
                    <em>*</em> indicates a required field
                </label>
                <div className="form-item">
                    <label for="title">
                        <em>*</em> Title:
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    ></input>
                </div>
                <div className="form-item">
                    <label for="review">
                        <em>*</em> Review:
                    </label>
                    <input
                        type="text"
                        name="review"
                        id="review"
                        onChange={(e) => setReview(e.target.value)}
                        value={review}
                        required
                    ></input>
                </div>
                <Btn btnClass="btn small submit-review fill-trans-orange" btnContent="POST"></Btn>
            </form>
        </div>
    );
};

export default ReviewForm;
