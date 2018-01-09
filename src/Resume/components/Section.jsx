import React from "react";
import SectionItem from "./SectionItem";
import ContentItem from "./ContentItem";
import ContentWithIcon, { iconSize } from "./ContentWithIcon";

const Section = ({
    title,
    iconCls,
    items
}) => {
    const titleEl = (
        <ContentWithIcon iconSize={iconSize.middle} iconCls={iconCls}>
            <span className="title">{title || "STUB SECTION TITLE"}</span>
        </ContentWithIcon>);
    return (
        <div className="section">
            <ContentItem big={titleEl} />
            {items.map((item, i) => <SectionItem key={i} {...item} />)}
        </div>
    );
};


export default Section;