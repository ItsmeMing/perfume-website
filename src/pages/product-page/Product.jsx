import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import ProductBox from "../../global-components/product-box/ProductBox";
import SortFilter from "./components/sort-filter/SortFilter";

function Product() {
    const [fHeader, setFHeader] = useState("Shop All.");
    const temp = useSelector((state) => state.products).products.data;
    const [products, setProducts] = useState([]);
    const unfilteredProducts = useRef();
    const handleFilter = (name, id) => {
        switch (name) {
            case "All":
                setFHeader("Shop All.");
                setProducts(temp);
                unfilteredProducts.current = temp;
                console.log(unfilteredProducts.current);
                break;
            case "Women":
            case "Men":
            case "Unisex":
                name === "Unisex" ? setFHeader(`${name} Perfumes.`) : setFHeader(`Perfumes for ${name}.`);
                unfilteredProducts.current = temp.filter((t) => t.categoryId === id);
                setProducts(unfilteredProducts.current);
                break;
            case "Bestsellers":
                setFHeader("Bestselling Perfumes.");
                unfilteredProducts.current = temp.filter((t) => t.reviews > 1000);
                setProducts(unfilteredProducts.current);
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        handleFilter("All", null);
    }, []);

    const priceSort = useRef(null);
    const reviewsSort = useRef(null);

    const price = useSelector((state) => state.price).data;

    const Sort = (arr, priceBool, reviewsBool) => {
        let output = [];
        let result = [];
        const PriceSort = () => {
            const priceSorted = [...price].sort((a, b) => {
                if (priceSort.current.classList.contains("reverse")) return b - a;
                else return a - b;
            });
            for (const p of priceSorted) {
                const priceArr = [];
                for (const a of arr) {
                    if (a.price === p) {
                        priceArr.push(a);
                    }
                }
                result.push(priceArr);
            }

            if (reviewsSort.current.classList.contains("activated")) {
                for (const re of result) {
                    for (const r of re.sort((a, b) => {
                        let x = a["reviews"];
                        let y = b["reviews"];
                        if (reviewsSort.current.classList.contains("reverse")) return y - x;
                        else return x - y;
                    }))
                        output.push(r);
                }
            } else {
                for (const re of result) {
                    for (const r of re) {
                        output.push(r);
                    }
                }
            }
        };
        const ReviewsSort = () => {
            output = arr.sort((a, b) => {
                let x = a["reviews"];
                let y = b["reviews"];
                if (reviewsSort.current.classList.contains("reverse")) return y - x;
                else return x - y;
            });
        };
        if (priceBool) {
            PriceSort();
        }
        if (reviewsBool) {
            if (priceSort.current.classList.contains("activated")) {
                PriceSort();
            } else {
                ReviewsSort();
            }
        }
        return output;
    };

    const handlePriceSort = () => {
        const sortedArray = [...products];
        let result;
        switch (priceSort.current.className) {
            case "sort-item":
                priceSort.current.classList.add("activated");
                result = Sort(sortedArray, true, false);
                setProducts(result);
                break;
            case "sort-item activated":
                priceSort.current.classList.add("reverse");
                result = Sort(sortedArray, true, false);
                setProducts(result);
                break;
            case "sort-item activated reverse":
                priceSort.current.classList.remove("reverse");
                result = Sort(sortedArray, true, false);
                setProducts(result);
                break;
            default:
                break;
        }
    };

    const handleReviewsSort = () => {
        const sortedArray = [...products];
        let result;
        switch (reviewsSort.current.className) {
            case "sort-item":
                reviewsSort.current.classList.add("activated");
                result = Sort(sortedArray, false, true);
                setProducts(result);
                break;
            case "sort-item activated":
                reviewsSort.current.classList.add("reverse");
                result = Sort(sortedArray, false, true);
                setProducts(result);
                break;
            case "sort-item activated reverse":
                reviewsSort.current.classList.remove("reverse");
                result = Sort(sortedArray, false, true);
                setProducts(result);
                break;
            default:
                break;
        }
    };

    const handleDeteleSort = () => {
        priceSort.current.classList.remove("activated");
        priceSort.current.classList.remove("reverse");
        reviewsSort.current.classList.remove("activated");
        reviewsSort.current.classList.remove("reverse");
        console.log(unfilteredProducts);
        setProducts(unfilteredProducts);
    };

    return (
        <section className="products-container container g-0">
            <SortFilter
                products={products}
                onFilter={handleFilter}
                priceSort={priceSort}
                reviewsSort={reviewsSort}
                onPriceSort={handlePriceSort}
                onReviewsSort={handleReviewsSort}
                onDeleteSort={handleDeteleSort}
                header={fHeader}
            ></SortFilter>
            <Row>
                {products &&
                    products.map((product, index) => (
                        <ProductBox
                            key={index}
                            id={product.id}
                            productimg={product.productimg}
                            productimghover={product.productimghover}
                            product={product}
                            reviews={product.reviews}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        ></ProductBox>
                    ))}
            </Row>
        </section>
    );
}

export default Product;
