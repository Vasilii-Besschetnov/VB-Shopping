import React from "react";

const StoreCategoryItem = ({
    value,
    isEditing,
    readonly,
    editor,    
    
    onDeleteClick,
    onEditClick,
}) => {
    const content = isEditing ? editor : value;
    const buttons = [];
    if (!readonly) {
        if (editor) {
            buttons.push(<button key="edit" onClick={onEditClick}>Edit</button>);
        }
        buttons.push(<button key="delete" onClick={onDeleteClick}>X</button>);
    }
    return (
        <div>
            {content}
            {buttons}
        </div>
    );
};

export default StoreCategoryItem;