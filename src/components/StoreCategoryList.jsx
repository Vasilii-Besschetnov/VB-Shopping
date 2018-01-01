import React from "react";
import StoreCategoryItem from "./StoreCategoryItem";

const StoreCategoryList = ({
    categoryList,
    onDeleteClick
}) => {
    return (
        <div>
            {categoryList.map(c => <StoreCategoryItem
                                       key={c.id}
                                       onDeleteClick={() => onDeleteClick(c.id)}
                                       {...c} />)}
        </div>
    );
};

export default StoreCategoryList;