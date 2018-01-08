import React from "react";

const Period = ({
    startDate,
    endDate
}) => {
    return (
        <span>{startDate} - {endDate || "present"}</span>
    );
};


export default Period;