import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchCategories } from "./redux/productSlice";
import { fetchPrice } from "./redux/priceSlice";
import { fetchReviews } from "./redux/reviewsSlice";
import { publicRoutes } from "./routes";
import DefaultLayout from "./default-layout";
import { Container } from "react-bootstrap";
import { app } from "./firebase";
import cartSlice from "./redux/cartSlice";

function App() {
    //call api and then set it all to product's initial state
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
        dispatch(fetchPrice());
        dispatch(fetchReviews());
        let cartItems = JSON.parse(localStorage.getItem("cart"));
        if (cartItems === null) {
            cartItems = [];
        }
        dispatch(cartSlice.actions.setCart(cartItems));
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Container fluid className="g-0" style={{ position: "relative" }}>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            let Layout;
                            if (route.defaultlayout) Layout = DefaultLayout;
                            else Layout = Fragment;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        route.childroutes ? undefined : (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        )
                                    }
                                >
                                    {route.childroutes ? (
                                        <>
                                            <Route
                                                index
                                                element={
                                                    <Layout>
                                                        <Page />
                                                    </Layout>
                                                }
                                            />
                                            <Route
                                                path=":name"
                                                element={
                                                    <Layout>
                                                        <route.children />
                                                    </Layout>
                                                }
                                            />
                                        </>
                                    ) : undefined}
                                </Route>
                            );
                        })}
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}

export default App;
