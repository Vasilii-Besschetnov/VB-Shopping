import React from "react";

const ContentWithIcon = ({
    children
}) => {
    return (
        <div style={{display: "flex", alignItems: "baseline"}}>
            <div className="circle-area">
                <div className="circle"></div>
            </div>
            <div style={{flex: 1}}>
                {children}
            </div>
        </div>
    );
};


export default ContentWithIcon;