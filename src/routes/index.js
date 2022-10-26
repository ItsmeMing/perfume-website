import Main from "../pages/main-page/Main";
import Product from "../pages/product-page/Product";
import ProductDetails from "../pages/product-details-page/ProductDetails";
import Checkout from "../pages/checkout/Checkout";

const publicRoutes = [
    { path: "/", component: Main, childroutes: false, defaultlayout: true },
    { path: "/products", component: Product, childroutes: true, children: ProductDetails, defaultlayout: true },
    { path: "/checkout", component: Checkout, childroutes: false, defaultlayout: false },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
