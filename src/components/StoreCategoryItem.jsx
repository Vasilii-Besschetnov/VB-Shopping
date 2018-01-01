import React from "react";

const StoreCategoryItem = ({
    value,
    isEditing,
    editor,    
    
    onDeleteClick,
    onEditClick,
}) => {
    const content = isEditing ? editor : value;
    return (
        <div>
            {content}
            <button onClick={onEditClick}>Edit</button>
            <button onClick={onDeleteClick}>X</button>
        </div>
    );
};

export default StoreCategoryItem;