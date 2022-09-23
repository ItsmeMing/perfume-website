import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import BestSellers from "./components/bestsellers/BestSellers";
import Sliderr from "./components/slider/Slider";
import Slogan from "./components/slogan/Slogan";
import Desire from "./components/desire/Desire";
import ImageWithText from "./components/image-with-text/ImageWithText";

function Main() {
    return (
        <Fragment>
            <Banner></Banner>
            <Sliderr></Sliderr>
            <Slogan></Slogan>
            <BestSellers></BestSellers>
            <Desire></Desire>
            <ImageWithText></ImageWithText>
        </Fragment>
    );
}

export default Main;
