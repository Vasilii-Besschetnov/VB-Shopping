import React from "react";
import SectionList from "./SectionList";
import Header from "./Header";

const Resume = ({
    firstName,
    lastName,
    sections
}) => {
    return (
        <div className="Resume">
            <Header />
            <div className="row" style={{margin: 20}}>
                <div className="col-xs-8">
                    <SectionList sections={sections} />
                </div>
                <div className="col-xs-4"></div>
            </div>
        </div>
    );
}


export default Resume;