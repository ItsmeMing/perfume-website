import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Row } from "react-bootstrap";
import ProductBox from "../../global-components/product-box/ProductBox";
import SortFilter from "./components/sort-filter/SortFilter";

function Product() {
    const [fHeader, setFHeader] = useState("Shop All.");
    const temp = useSelector((state) => state.products).products.data;
    const [products, setProducts] = useState([]);
    const handleFilter = (name, id) => {
        switch (name) {
            case "All":
                setFHeader("Shop All.");
                setProducts(temp);
                break;
            case "Women":
            case "Men":
            case "Unisex":
                name === "Unisex" ? setFHeader(`${name} Perfumes.`) : setFHeader(`Perfumes for ${name}.`);
                setProducts(temp.filter((t) => t.categoryId === id));
                break;
            case "Bestsellers":
                setFHeader("Bestselling Perfumes.");
                setProducts(temp.filter((t) => t.reviews > 1000));
                break;
            default:
                break;
        }
    };
    useEffect(() => {
        handleFilter("All", null);
    }, []);

    return (
        <section className="products-container container g-0">
            <SortFilter products={products} onFilter={handleFilter} header={fHeader}></SortFilter>
            <Row>
                {products &&
                    products.map((product) => (
                        <ProductBox
                            key={product.id}
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
