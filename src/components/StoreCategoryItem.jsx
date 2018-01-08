import React from "react";
import Button from "src/components/Button";
import { label, formInline, inputGroup } from "bootstrap-css-modules/css/components.css";

const StoreCategoryItem = ({
    value,
    isEditing,
    readonly,
    editor,
    isDblClickEdit,
    
    onDeleteClick,
    onEditClick,
}) => {
    const buttons = [];
    let isEditingAllowed = false;
    if (!readonly) {
        if (editor && !isEditing) {
            isEditingAllowed = true;
            if (!isDblClickEdit) {
                buttons.push(<Button key="edit" onClick={onEditClick}>Edit</Button>);
            }
        }
        if (!isEditing) {
            buttons.push(<Button key="delete" onClick={onDeleteClick}>X</Button>);
        }
    }
    const content = isEditing ? editor :
        (<label className={label}
              onDoubleClick={isEditingAllowed && isDblClickEdit ? onEditClick : null}>{value}</label>);
    return (
        <div className={formInline}>
            <div className={inputGroup}>
            {content}
            {buttons}
            </div>
        </div>
    );
};

export default StoreCategoryItem;