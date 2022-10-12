import { Fragment, memo } from "react";
import "./Btn.scss";

const Btn = (props) => {
    return (
        <Fragment>
            <button className={props.btnClass} onClick={props.onClick}>
                {props.btnContent}
                {props.children}
            </button>
        </Fragment>
    );
};

export default memo(Btn);
