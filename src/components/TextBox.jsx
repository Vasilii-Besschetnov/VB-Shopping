import React from "react";

export default ({
    value,
    
    onChange,
}) => {
    return (
        
        <input value={value} onChange={onChange} />
    );
};