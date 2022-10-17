import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchCategories } from "./redux/productSlice";
import { fetchPrice } from "./redux/priceSlice";
import { publicRoutes } from "./routes";
import DefaultLayout from "./default-layout";
import { Container } from "react-bootstrap";
import ProductDetails from "./pages/product-details-page/ProductDetails";

function App() {
    //call api and then set it all to product's initial state
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
        dispatch(fetchPrice());
    }, []);

    const products = useSelector((state) => state.products).products.data;
    return (
        <Router>
            <div className="App">
                <Container fluid className="g-0" style={{ position: "relative" }}>
                    <DefaultLayout>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                console.log(route);
                                return (
                                    <Route key={index} path={route.path} element={route.childroutes ? null : <Page />}>
                                        {route.childroutes ? (
                                            <>
                                                <Route index element={<Page />} />
                                                <Route path=":id" element={<route.children />} />
                                            </>
                                        ) : null}
                                    </Route>
                                );
                            })}
                        </Routes>
                    </DefaultLayout>
                </Container>
            </div>
        </Router>
    );
}

export default App;
