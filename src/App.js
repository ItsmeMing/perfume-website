import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./DefaultLayout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Cách tối ưu hơn */}
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                    {/* //Cách thuần
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/main-page" element={<MainPage />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
