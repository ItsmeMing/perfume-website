import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reviewsSlice from "../../../../../../redux/reviewsSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Btn from "../../../../../../global-components/btn/Btn";
import "./ReviewForm.scss";

const ReviewForm = ({ reviewFormRef, product, reviews }) => {
    const loginStatus = useSelector((state) => state.user).logged;

    const handleLogin = () => {
        document.querySelector(".auth-container").classList.toggle("active");
    };

    const [title, setTitle] = useState();
    const [review, setReview] = useState();
    const auth = getAuth();
    let username;
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const name = user.displayName;
            username = name;
        }
    });
    const dispatch = useDispatch();
    let length = reviews.length;

    const handlePostReview = (e) => {
        e.preventDefault();
        const temp = new Date();
        const date = temp.getDate();
        const month = temp.getMonth() + 1;
        const year = temp.getFullYear();
        const data = {
            id: length++,
            productId: product.id,
            username: username,
            title: title,
            review: review,
            createdAt: `${date}/${month}/${year}`,
        };
        fetch("https://fake-perfume-api.herokuapp.com/reviews", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => {
                dispatch(reviewsSlice.actions.addReview(data));
                setTitle("");
                setReview("");
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="review-form-wrapper" ref={reviewFormRef}>
            {loginStatus === "true" ? (
                <>
                    <span className="form-header">WRITE A REVIEW</span>
                    <form action="" method="POST" className="form">
                        <label className="form-hint">
                            <em>*</em> indicates a required field
                        </label>
                        <div className="form-item">
                            <label htmlFor="title">
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
                            <label htmlFor="review">
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
                        <Btn
                            btnClass="btn small submit-review fill-trans-orange"
                            btnContent="POST"
                            onClick={(e) => {
                                handlePostReview(e);
                            }}
                        ></Btn>
                    </form>
                </>
            ) : (
                <div className="login-warning">
                    <p className="warning">Please login in order to use this function</p>
                    <Btn btnClass="btn login ease-orange-trans" btnContent="LOG IN" onClick={handleLogin} />
                </div>
            )}
        </div>
    );
};

export default ReviewForm;
