import { Fragment } from "react";
import Banner from "../../components/page-components/Main/banner/Banner";
import BestSellers from "../../components/page-components/Main/bestsellers/BestSellers";
import Sliderr from "../../components/page-components/Main/slider/Slider";
import Slogan from "../../components/page-components/Main/slogan/Slogan";
import Desire from "../../components/page-components/Main/desire/Desire";
import ImageWithText from "../../components/page-components/Main/image-with-text/ImageWithText";
import Refund from "../../components/page-components/Main/refund/Refund";
import Features from "../../components/page-components/Main/features/Features";
import SocialPosts from "../../components/page-components/Main/social-posts/SocialPosts";

function Main() {
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
}

export default Main;
