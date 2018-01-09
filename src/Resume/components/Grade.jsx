import React from "react";


const Grade = ({
    mark
}) => {
    mark = mark || 4;
    const rest = 5 - mark;
    return (
        <span className="grade">
            <div className="mark" style={{flex: mark}}></div>
            <div className="mark-rest" style={{flex: rest}}></div>
        </span>
    )
};

export default Grade;