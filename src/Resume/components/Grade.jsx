import React from "react";

const toPercent = (v) => {
    return (v / 5 * 100) + "%";
};

const Grade = ({
    mark
}) => {
    mark = toPercent(mark || 4);
    return (
        <span className="grade">
            <div className="mark" style={{width: mark}}></div>
            <div className="mark-rest" style={{left: mark}}></div>
        </span>
    )
};

export default Grade;