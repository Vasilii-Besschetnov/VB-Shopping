import React from "react";
import JobTitle from "./JobTitle";
import JobDescription from "./JobDescription";

const JobInfo = ({
    startDate,
    endDate
}) => {
    return (
        <div>
            <JobTitle />
            <JobDescription />
        </div>
    );
};


export default JobInfo;