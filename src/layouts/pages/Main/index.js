import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import BestSellers from "./components/bestsellers/BestSellers";
import Sliderr from "./components/slider/Slider";
import Slogan from "./components/slogan/Slogan";

function Main() {
    return (
        <Fragment>
            <Banner></Banner>
            <Sliderr></Sliderr>
            <Slogan></Slogan>
            <BestSellers></BestSellers>
        </Fragment>
    );
}

export default Main;
