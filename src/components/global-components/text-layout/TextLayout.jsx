import { Fragment } from "react";
import Btn from "../btn/Btn";
import "./TextLayout.scss";

const TextLayout = (props) => {
    return (
        <Fragment>
            <p className="tl-text">{props.firstText}</p>
            <p className="tl-child-text">{props.secondText}</p>
            <Btn btnClass={props.btnClass} btnContent={props.btnContent}></Btn>
        </Fragment>
    );
}

export default TextLayout;
