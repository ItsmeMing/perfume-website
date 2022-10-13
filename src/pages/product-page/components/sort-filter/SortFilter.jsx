import { memo } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft, faCircleUp } from "@fortawesome/free-solid-svg-icons";
import Btn from "../../../../global-components/btn/Btn";
import "./SortFilter.scss";

const SortFilter = ({ products, onFilter, header }) => {
    const cates = useSelector((state) => state.products).categories.data;
    return (
        <section className="sort-filter-wrapper">
            <div className="label-wrapper">
                <h1 className="filter-header">{header}</h1>
                <span className="product-count">{products.length} products</span>
            </div>
            <div className="sort-filter">
                <ul className="sort-list">
                    <Btn
                        btnClass="btn ease-trans-orange"
                        btnContent="All"
                        onClick={() => {
                            onFilter("All", null);
                        }}
                    ></Btn>
                    {cates &&
                        cates.map((cate) => (
                            <li className="sort-item">
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
                <Btn btnClass="btn filter ease-trans-orange" btnContent="Filter">
                    <FontAwesomeIcon className="filter-icon" icon={faRightLeft}></FontAwesomeIcon>
                    <div className="filter-box">
                        <ul className="filter-list">
                            <li className="filter-item activated">
                                <span>Price:</span>
                                <FontAwesomeIcon className="f-i-icon" icon={faCircleUp}></FontAwesomeIcon>
                            </li>
                            <li className="filter-item">
                                <span>Reviews:</span>
                                <FontAwesomeIcon className="f-i-icon" icon={faCircleUp}></FontAwesomeIcon>
                            </li>
                            <li className="filter-item">
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
