import Main from "../pages/main-page/Main";
import Product from "../pages/product-page/Product";
import ProductDetails from "../pages/product-details-page/ProductDetails";

const publicRoutes = [
    { path: "/index", component: Main, childroutes: false },
    { path: "/products", component: Product, childroutes: true, children: ProductDetails },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
