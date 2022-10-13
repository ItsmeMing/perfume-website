import Main from "../pages/main-page/Main";
import Product from "../pages/product-page/Product";

const publicRoutes = [
    { path: "/", component: Main },
    { path: "/products", component: Product },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
