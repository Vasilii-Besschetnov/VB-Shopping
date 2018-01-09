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
    iconCls,
    isMultiline,
    children
}) => {
    const circleCls = iconsSizeCls[iconSize] || "";
    iconCls = iconCls || "";
    return (
        <div style={{display: "table", alignItems: isMultiline ? "baseline" : "center"}}>
            <div className="circle-area" style={{display:"table-cell"}}>
                <div className={`circle ${circleCls} ${iconCls}`}></div>
            </div>
            <div style={{paddingLeft: "15px"}}>
                {children}
            </div>
        </div>
    );
};


export default ContentWithIcon;

export { iconSize };