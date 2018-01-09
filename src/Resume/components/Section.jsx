import React from "react";
import SectionItem from "./SectionItem";
import ContentItem from "./ContentItem";
import ContentWithIcon, { iconSize } from "./ContentWithIcon";

const Section = ({
    title,
    iconCls,
    items
}) => {
    items = items || Array(3).fill().map(s => ({
        title: "Job #" + s
    }));
    const titleEl = (
        <ContentWithIcon iconSize={iconSize.middle} iconCls={iconCls}>
            <span className="title">{title || "STUB SECTION TITLE"}</span>
        </ContentWithIcon>);
    return (
        <div class="section">
            <ContentItem big={titleEl} />
            {items.map(item => <SectionItem key={item.title} {...item} />)}
        </div>
    );
};


export default Section;