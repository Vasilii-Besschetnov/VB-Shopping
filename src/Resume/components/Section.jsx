import React from "react";
import SectionItem from "./SectionItem";
import ContentItem from "./ContentItem";

const Period = ({
    title,
    items
}) => {
    items = items || Array(3).fill().map(s => ({
        title: "Job #" + s
    }));
    const titleEl = (<span className="title">{title || "STUB SECTION TITLE"}</span>);
    return (
        <div>
            <ContentItem big={titleEl} />
            {items.map(item => <SectionItem key={item.title} {...item} />)}
        </div>
    );
};


export default Period;