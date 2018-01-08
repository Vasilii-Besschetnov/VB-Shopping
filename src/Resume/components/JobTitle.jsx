import React from "react";

const Period = ({
    title
}) => {
    return (
        <div className="title">{title || "titlewould be here"}</div>
    );
};


export default Period;