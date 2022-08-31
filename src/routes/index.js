import Main from "../layouts/pages/Main/index.js";
import Product from "../layouts/pages/Product/index.js";

const publicRoutes = [
    { path: "/", component: Main },
    { path: "/products", component: Product },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
