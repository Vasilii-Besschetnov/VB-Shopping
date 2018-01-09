import React from "react";
import Grade from "./Grade";

const SkillItem = ({
    name,
    grade
}) => {
    name = name || "A skill name";
    const res = [<span key="name">{name}</span>]
    if (grade) {
        res.push(<Grade mark={grade} />);
    }
    return (
        <div class="skill">{res}</div>
    );  
};

export default SkillItem;