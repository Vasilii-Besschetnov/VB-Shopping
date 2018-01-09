import React from "react";
import SkillItem from "./SkillItem";
import ContentWithIcon from "./ContentWithIcon";


const SkillSection = ({
    title,
    iconCls,
    skills
}) => {
    skills = skills || Array(3).fill();
    const titleEl = (        
        <ContentWithIcon iconSize={2} isMultiline={false} iconCls={iconCls || ""}>            
            <div className="title">{title || "STUB SECTION TITLE"}</div>
        </ContentWithIcon>
        );
    return (
        <div className="section">
            {titleEl}
            {skills.map((skill, i) => <SkillItem key={i} {...skill} />)}
        </div>
    );
};

export default SkillSection;