import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search({ search }) {
    return (
        <section ref={search} className="search-wrapper">
            <form className="search-form">
                <input type="text" className="form-search" placeholder="Search..."></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
            </form>
        </section>
    );
}

export default Search;
