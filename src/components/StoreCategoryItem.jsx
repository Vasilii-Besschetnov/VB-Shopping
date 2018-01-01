import React from "react";

const StoreCategoryItem = ({
    name,
    onDeleteClick
}) => {
    return (
        <div>
            {name}
            <button onClick={onDeleteClick}>X</button>
        </div>
    );
};

export default StoreCategoryItem;