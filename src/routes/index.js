import Main from "../pages/main-page/Main.js";
import Product from "../pages/product-page/Product.js";

const publicRoutes = [
    { path: "/", component: Main },
    { path: "/products", component: Product },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
