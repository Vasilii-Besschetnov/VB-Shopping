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
    startDate = startDate || new Date();
    return (
        <span>{dateToString(startDate)} - {dateToString(endDate)}</span>
    );
};


export default Period;