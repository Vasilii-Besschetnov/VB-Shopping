import React from "react";
import Section from "./Section";

const SectionList = ({
    sections
}) => {
    return (
        <div className="main-section">
            <div className="vert-line"></div>
            {sections.map(s => <Section key={s.title} {...s} />)}
        </div>
    );
};


export default SectionList;