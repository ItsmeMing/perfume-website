import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchCategories } from "./redux/productSlice";
import { fetchPrice } from "./redux/priceSlice";
import { publicRoutes } from "./routes";
import DefaultLayout from "./default-layout";
import { Container } from "react-bootstrap";

function App() {
    //call api and then set it all to product's initial state
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
        dispatch(fetchPrice());
    }, []);

    return (
        <Router>
            <div className="App">
                <Container fluid className="g-0" style={{ position: "relative" }}>
                    <DefaultLayout>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={route.childroutes ? undefined : <Page />}
                                    >
                                        {route.childroutes ? (
                                            <>
                                                <Route index element={<Page />} />
                                                <Route path=":name" element={<route.children />} />
                                            </>
                                        ) : undefined}
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
