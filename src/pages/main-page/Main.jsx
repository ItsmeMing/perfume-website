import { Fragment, useEffect } from "react";
import Banner from "./components/banner/Banner";
import BestSellers from "./components/bestsellers/BestSellers";
import Sliderr from "./components/slider/Slider";
import Slogan from "./components/slogan/Slogan";
import Desire from "./components/desire/Desire";
import ImageWithText from "./components/image-with-text/ImageWithText";
import Refund from "./components/refund/Refund";
import Features from "./components/features/Features";
import SocialPosts from "./components/social-posts/SocialPosts";

const Main = () => {
    //always start at the top of the page
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Dossier | Luxury scents, fair price – Dossier Perfumes";
    }, []);

    return (
        <Fragment>
            <Banner></Banner>
            <Sliderr></Sliderr>
            <Slogan></Slogan>
            <BestSellers></BestSellers>
            <Desire></Desire>
            <ImageWithText></ImageWithText>
            <Refund></Refund>
            <Features></Features>
            <SocialPosts></SocialPosts>
        </Fragment>
    );
};

export default Main;
