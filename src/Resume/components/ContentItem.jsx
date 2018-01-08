import React from "react";

const ContentItem = ({
    small,
    big
}) => {
    return (        
        <div className="cnt-flex">
            <div className="period-col">
                {small}                
            </div>
            <div className="flex-expand">
                {big}
            </div>
        </div>
    );
};


export default ContentItem;