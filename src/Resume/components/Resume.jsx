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
        <div className="resume">
            <Header />
            <div className="max-width">
                <div className="row">
                    <div className="col-xs-8">
                        <SectionList sections={sections} />
                    </div>
                    <div className="col-xs-4">
                        <SkillList sections={skills} />
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Resume;