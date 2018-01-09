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
        <div class="section">
            {titleEl}
            {skills.map(skill => <SkillItem {...skill} />)}
        </div>
    );
};

export default SkillSection;