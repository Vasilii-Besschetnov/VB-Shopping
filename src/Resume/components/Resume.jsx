import React from "react";
import Header from "./Header";
import SectionList from "./SectionList";
import SkillList from "./SkillList";
import data from "../data";

const Resume = () => {
    const {
        sections,
        skills
    } = data;
    return (
        <div className="Resume">
            <Header />
            <div className="row" style={{padding: "0 40px"}}>
                <div className="col-xs-8">
                    <SectionList sections={sections} />
                </div>
                <div className="col-xs-4">
                    <SkillList sections={skills} />
                </div>
            </div>
        </div>
    );
}


export default Resume;