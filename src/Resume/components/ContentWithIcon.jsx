import React from "react";

const iconSize = {
    small: 1,
    middle: 2,
    large: 3
};

const iconsSizeCls = {
    [iconSize.small]: "",
    [iconSize.middle]: "middle",
    [iconSize.large]: "large",
}

const ContentWithIcon = ({
    iconSize,
    isMultiline,
    children
}) => {
    const circleCls = iconsSizeCls[iconSize] || "";
    return (
        <div style={{display: "flex", alignItems: isMultiline ? "baseline" : "center"}}>
            <div className="circle-area">
                <div className={`circle ${circleCls}`}></div>
            </div>
            <div style={{flex: 1}}>
                {children}
            </div>
        </div>
    );
};


export default ContentWithIcon;

export { iconSize };