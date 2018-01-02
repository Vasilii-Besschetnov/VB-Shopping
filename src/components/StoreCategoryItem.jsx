import React from "react";

const StoreCategoryItem = ({
    value,
    isEditing,
    readonly,
    editor,
    isDblClickEdit,
    
    onDeleteClick,
    onEditClick,
}) => {
    const content = isEditing ? editor : value;
    const buttons = [];
    let isEditingAllowed = false;
    if (!readonly) {
        if (editor && !isEditing) {
            isEditingAllowed = true;
            if (!isDblClickEdit) {
                buttons.push(<button key="edit" onClick={onEditClick}>Edit</button>);
            }
        }
        buttons.push(<button key="delete" onClick={onDeleteClick}>X</button>);
    }
    return (
        <div>
            <span onDoubleClick={isEditingAllowed && isDblClickEdit ? onEditClick : null}>
                {content}
            </span>
            {buttons}
        </div>
    );
};

export default StoreCategoryItem;