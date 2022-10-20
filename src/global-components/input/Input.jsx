import { Fragment } from "react";
import "./Input.scss";

const Input = (props) => {
    return (
        <Fragment>
            <input
                placeholder={props.placeholder}
                className={props.className}
                type={props.type}
                onChange={props.onChange}
            ></input>
        </Fragment>
    );
};

export default Input;
