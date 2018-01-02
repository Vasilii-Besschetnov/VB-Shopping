import React from "react";

export default (props) => {
    const {
        onRef,
        ...rest
    } = props;
    
    return (        
        <input ref={onRef} {...rest}/>
    );
};