import React from "react";
import Section from "./Section";

const SectionList = ({
    sections
}) => {
    sections = sections || (() => {
        return Array(3).fill().map(s => {
            return {
                title: "Experience"
            }
        })
    })();
    return (
        <div style={{position: "relatinve" }}>
            <div className="vert-line"></div>
            {sections.map(s => <Section key={s.title} {...s} />)}
        </div>
    );
};


export default SectionList;