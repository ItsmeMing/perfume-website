import { useRef } from "react";
import Btn from "../../../../global-components/btn/Btn";
import ReviewForm from "./components/review-form/ReviewForm";
import "./Reviews.scss";

const Reviews = ({ reviews }) => {
    const ReviewFormRef = useRef();
    return (
        <section className="reviews-container">
            <div className="reviews-wrapper">
                <div className="rating-reviews-count">
                    <h1 className="reviews-header">Product Reviews</h1>
                    <span>{reviews} reivews</span>
                </div>
                <Btn btnClass="btn fill-trans-orange" btnContent="WRITE A REVIEW"></Btn>
            </div>
            <ReviewForm reviewFormRef={ReviewFormRef} />
            <section className="reviews"></section>
        </section>
    );
};

export default Reviews;
