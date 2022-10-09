import { Fragment } from "react";
import "./Btn.scss";

const Btn = (props) => {
    return (
        <Fragment>
            <button className={props.btnClass} onClick={props.onClick}>{props.btnContent}</button>
        </Fragment>
    );
}

export default Btn;