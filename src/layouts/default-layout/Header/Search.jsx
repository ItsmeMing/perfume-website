import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Search = ({ search }) => {
    const [results, setResults] = useState("Không có sản phẩm nào")
    return (
        <section ref={search} className="search-wrapper">
            <form className="search-form">
                <input type="text" className="form-search" placeholder="Search..."></input>
                <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
                </span>
            </form>
            <div className="search-results">{results}</div>
        </section>
    );
}

export default Search;
