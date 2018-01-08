import React from "react";
import SectionItem from "./SectionItem";
import ContentItem from "./ContentItem";
import ContentWithIcon, { iconSize } from "./ContentWithIcon";

const Period = ({
    title,
    items
}) => {
    items = items || Array(3).fill().map(s => ({
        title: "Job #" + s
    }));
    const titleEl = (
        <ContentWithIcon iconSize={iconSize.middle}>
            <span className="title">{title || "STUB SECTION TITLE"}</span>
        </ContentWithIcon>);
    return (
        <div>
            <ContentItem big={titleEl} />
            {items.map(item => <SectionItem key={item.title} {...item} />)}
        </div>
    );
};


export default Period;