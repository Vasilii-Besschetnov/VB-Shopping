import React from "react";
import Grade from "./Grade";

const SkillItem = ({
    name,
    grade
}) => {
    name = name || "A skill name";
    const res = [<span key="name">{name}</span>]
    if (grade) {
        res.push(<Grade key="grade" mark={grade} />);
    }
    return (
        <div className="skill">{res}</div>
    );  
};

export default SkillItem;