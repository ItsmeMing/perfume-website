import { useRef } from "react";
import { useSelector } from "react-redux";
import Btn from "../../../../global-components/btn/Btn";
import ReviewForm from "./components/review-form/ReviewForm";
import "./Reviews.scss";

const Reviews = ({ reviewsCount, product }) => {
    const ReviewFormRef = useRef();
    const reviews = useSelector((state) => state.reviews).data;
    const filteredReviews = reviews.filter((review) => {
        return review.productId === product.id;
    });

    const handleReviewForm = () => {
        ReviewFormRef.current.classList.toggle("active");
    };
    return (
        <>
            <section className="reviews-container">
                <div className="reviews-wrapper">
                    <div className="rating-reviews-count">
                        <h1 className="reviews-header">Product Reviews</h1>
                        <span>{reviewsCount} reviews</span>
                    </div>
                    <Btn btnClass="btn fill-trans-orange" btnContent="WRITE A REVIEW" onClick={handleReviewForm}></Btn>
                </div>
            </section>
            <ReviewForm reviewFormRef={ReviewFormRef} product={product} reviews={reviews} />
            <section className="reviews">
                {filteredReviews.map((review, index) => {
                    return (
                        <div className="review" key={index}>
                            <div>
                                <p className="username">{review.username}</p>
                                <span className="created-at">{review.createdAt}</span>
                            </div>
                            <p className="review-title">{review.title}</p>
                            <p className="review-content">{review.review}</p>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default Reviews;
