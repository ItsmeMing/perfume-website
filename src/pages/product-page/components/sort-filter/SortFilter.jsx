import { memo } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import "./SortFilter.scss";

const SortFilter = ({
    products,
    priceSort,
    reviewsSort,
    onPriceSort,
    onReviewsSort,
    onDeleteSort,
    onFilter,
    header,
}) => {
    const cates = useSelector((state) => state.products).categories.data;

    return (
        <section className="sort-filter-wrapper">
            <div className="label-wrapper">
                <h1 className="filter-header">{header}</h1>
                <span className="product-count">{products.length} products</span>
            </div>
            <div className="sort-filter">
                <ul className="filter-list">
                    <Btn
                        btnClass="btn ease-trans-orange"
                        btnContent="All"
                        onClick={() => {
                            onFilter("All", null);
                        }}
                    ></Btn>
                    {cates &&
                        cates.map((cate, index) => (
                            <li className="filter-item" key={index}>
                                <Btn
                                    btnClass="btn ease-trans-orange"
                                    btnContent={cate.name}
                                    onClick={() => {
                                        onFilter(cate.name, cate.id);
                                    }}
                                ></Btn>
                            </li>
                        ))}
                    <Btn
                        btnClass="btn ease-trans-orange"
                        btnContent="Bestsellers"
                        onClick={() => {
                            onFilter("Bestsellers", null);
                        }}
                    ></Btn>
                </ul>
                <Btn btnClass="btn sort ease-trans-orange" btnContent="Sort">
                    <FontAwesomeIcon className="sort-icon" icon={faRightLeft}></FontAwesomeIcon>
                    <div className="sort-box">
                        <ul className="sort-list">
                            <li className="sort-item" id="price" ref={priceSort} onClick={onPriceSort}>
                                <span>Price:</span>
                                <FontAwesomeIcon className="f-i-icon" icon={faCircleUp}></FontAwesomeIcon>
                            </li>
                            <li className="sort-item" ref={reviewsSort} onClick={onReviewsSort}>
                                <span>Reviews:</span>
                                <FontAwesomeIcon className="f-i-icon" icon={faCircleUp}></FontAwesomeIcon>
                            </li>
                            <li className="sort-item" onClick={onDeleteSort}>
                                <span>Clear all</span>
                            </li>
                        </ul>
                    </div>
                </Btn>
            </div>
        </section>
    );
};

export default memo(SortFilter);
