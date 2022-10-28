import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.scss";

const Search = ({ search }) => {
    const [searchText, setSearchText] = useState();
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
        }, 3000);

        return () => clearTimeout(delayDebounceFn);
    }, [searchText, products]);
    return (
        <section ref={search} className="search-wrapper">
            <form className="search-form">
                <input
                    type="text"
                    className="form-search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    //     setTimeout(() => {
                    //         products.forEach((product) => {
                    //             if (product.name.includes(searchText.toUpperCase())) temp.push(product);
                    //         });
                    //         setResults(temp);
                    //     }, 2000);
                    // }}
                ></input>
                <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"></FontAwesomeIcon>
                </span>
            </form>
            <div className="search-results">
                {results === undefined
                    ? "No products relevant"
                    : results.map((result, index) => {
                          return (
                              <Link to={`/products/${result.name.toLowerCase()}`}>
                                  <div className="found-product" key={index}>
                                      <img
                                          src={result.images.productimg}
                                          alt=""
                                          style={{ width: "60px" }}
                                          className="product-img"
                                      ></img>
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
        </section>
    );
};

export default Search;
