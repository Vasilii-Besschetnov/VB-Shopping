import React from "react";
import ContentItem from "./ContentItem";
import ContentWithIcon from "./ContentWithIcon";
import Period from "./Period";

const SectionItem = ({
    title,
    period,
    content    
}) => {   
    content = content || "some exp";
    const periodEl = (<Period {...period} />);
    const d = []; // todo check if it really needed. I need formatting
    
    if (title) {
        d.push(<div key="title" className="sub-title">{title}</div>)
    }
    
    d.push(<div key="content" dangerouslySetInnerHTML={{__html: content}}></div>);
    
    const contentEl = (
        <ContentWithIcon isMultiline={true}>
            {d}
        </ContentWithIcon>
    );
    return (
        <ContentItem
            small={periodEl}
            big={contentEl}/>
    );
};


export default SectionItem;