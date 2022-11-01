import { Fragment } from "react";
import { Link } from "react-router-dom";
import Btn from "../btn/Btn";
import "./TextLayout.scss";

const TextLayout = (props) => {
    return (
        <Fragment>
            <p className="tl-text">{props.firstText}</p>
            <p className="tl-child-text">{props.secondText}</p>
            <Link to="/about-us">
                <Btn btnClass={props.btnClass} btnContent={props.btnContent}></Btn>
            </Link>
        </Fragment>
    );
};

export default TextLayout;
