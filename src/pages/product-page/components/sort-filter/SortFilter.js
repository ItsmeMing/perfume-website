import { useState, useEffect } from "react";
import Btn from "../../../../global-components/btn/Btn";

const SortFilter = () => {
    const [cates, setCates] = useState(null);
    useEffect(() => {
        fetch("http://localhost:3001/api/categories")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCates(data);
            });
    }, []);
    return (
        <section className="sort-filter-wrapper">
            <div className="label-count">
                <span>Shop all.</span>
                <span>86 products</span>
            </div>
            <div className="sort-filter">
                <ul className="sort-list">
                    {cates &&
                        cates.map((cate) => (
                            <li className="sort-item">
                                <Btn btnClass="btn ease-trans-orange" btnContent={cate.name}></Btn>
                            </li>
                        ))}
                </ul>
            </div>
        </section>
    );
};

export default SortFilter;
