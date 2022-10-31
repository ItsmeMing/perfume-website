import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn from "../../../../global-components/btn/Btn";
import "./Search.scss";

const Search = ({ search, searchText, setSearchText }) => {
    const [results, setResults] = useState(undefined);
    const products = useSelector((state) => state.products).products.data;

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchText);
            // Send Axios request here
            const temp = [];
            if (searchText === "") setResults(undefined);
            else {
                products.forEach((product) => {
                    if (product.name.includes(searchText.toUpperCase())) temp.push(product);
                });
                setResults(temp);
            }
        }, 1500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchText, products]);
    return (
        <section ref={search} className="search-wrapper">
            <form className="search-form">
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                <input
                    type="text"
                    className="form-search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                ></input>
            </form>
            <div className="search-results">
                {results === undefined
                    ? "No products relevant"
                    : results.map((result, index) => {
                          return (
                              <Link to={`/products/${result.name.toLowerCase()}`}>
                                  <div className="found-product" key={index}>
                                      <img src={result.images.productimg} alt="" className="product-img"></img>
                                      <div className="product-info-group">
                                          <p className="product-name">{result.name}</p>
                                          <p className="product-inspiration">
                                              Inspired by <b>{result.description}</b>
                                          </p>
                                      </div>
                                      <span className="product-price">${result.price}</span>
                                  </div>
                              </Link>
                          );
                      })}
            </div>
            <Btn
                btnClass="btn small search-exit ease-trans-orange"
                btnContent="EXIT"
                onClick={() => {
                    search.current.classList.remove("active");
                }}
            />
        </section>
    );
};

export default Search;
