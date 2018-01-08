import React from "react";
import { btn } from "bootstrap-css-modules/css/buttons.css";

const Button = ({ children, className, ...rest}) => {
    let cls = btn;
    if (className) {
        cls += " " + className;
    }
    return (
        <button className={cls} {...rest}>{children}</button>
    );
};

export default Button;