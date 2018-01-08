import React from "react";

const ContentItem = ({
    small,
    big
}) => {
    return (        
        <div className="row">
            <div className="col-xs-2">
                {small}                
            </div>
            <div className="col-xs-10">
                {big}
            </div>
        </div>
    );
};


export default ContentItem;