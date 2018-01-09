import React from "react";

const dateToString = date => {
    if (!date) return "present";
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    return `${date.getFullYear()}-${month}`;
}

const Period = ({
    startDate,
    endDate
}) => {
    return (
        <span className="period">{startDate ? (dateToString(startDate) + " - " +dateToString(endDate)) : null}</span>
    );
};


export default Period;