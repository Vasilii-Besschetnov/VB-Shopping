import React from "react";
import SkillSection from "./SkillSection";

const SkillList = ({
    sections
}) => {
    return (
        <div>
            {sections.map(s => {
                return (
                    <SkillSection key={s.title} {...s}/>
                    );
            })}
            
        </div>
    );
};


export default SkillList;
            