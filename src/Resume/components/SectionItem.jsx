import React from "react";
import ContentItem from "./ContentItem";
import Period from "./Period";

const SectionItem = ({
    period,
    content    
}) => {   
    content = content || "some exp";
    const periodEl = (<Period {...period} />);
    const contentEl = (
        <div style={{display: "flex"}}>
            <div className="circle-area">
                <div className="circle"></div>
            </div>
            <div style={{flex: 1}}>
                {content}
            </div>
        </div>
    );
    return (
        <ContentItem
            small={periodEl}
            big={contentEl}/>
    );
};


export default SectionItem;