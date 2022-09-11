import { Fragment } from "react";
import Banner from "./components/banner/Banner";
import Sliderr from "./components/slider/Slider";
import Slogan from "./components/slogan/Slogan";

function Main() {
    return (
        <Fragment>
            <Banner></Banner>
            <Sliderr></Sliderr>
            <Slogan></Slogan>
        </Fragment>
    );
}

export default Main;
