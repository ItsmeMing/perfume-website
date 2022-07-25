import LandingPage from "@/pages/Landing-page";
import ProductsPage from "@/pages/Products-page";
import Upload from "@/pages/Upload";

// Các routes không cần đăng nhập
const publicRoutes = [
    { path: "/", component: LandingPage },
    { path: "/products", component: ProductsPage },
    { path: "/upload", component: Upload, layout: null },
];

// Các routes cần đăng nhập mới vào được
const privateRoutes = [];

export { privateRoutes, publicRoutes };
