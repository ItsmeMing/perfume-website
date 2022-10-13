import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchCategories } from "./redux/productSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./default-layout";
import { Container } from "react-bootstrap";

function App() {
    //call api and then set it all to product's initial state
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(fetchCategories());
    }, []);

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Container fluid className="g-0" style={{ position: "relative" }}>
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    </Container>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
