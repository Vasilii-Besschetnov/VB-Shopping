import React from "react";
import { formControl } from "bootstrap-css-modules/css/components.css";

export default (props) => {
    const {
        onRef,
        ...rest
    } = props;
    
    return (        
        <input className={formControl} ref={onRef} {...rest}/>
    );
};