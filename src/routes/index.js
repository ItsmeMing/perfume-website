import Main from "../layouts/pages/Main.js";
import Product from "../layouts/pages/Product.js";

const publicRoutes = [
    { path: "/", component: Main },
    { path: "/products", component: Product },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
