import React from "react";
import ContentItem from "./ContentItem";
import ContentWithIcon from "./ContentWithIcon";
import Period from "./Period";

const SectionItem = ({
    period,
    content    
}) => {   
    content = content || "some exp";
    const periodEl = (<Period {...period} />);
    
    const contentEl = (
        <ContentWithIcon isMultiline={true}>
            {content}
        </ContentWithIcon>
    );
    return (
        <ContentItem
            small={periodEl}
            big={contentEl}/>
    );
};


export default SectionItem;