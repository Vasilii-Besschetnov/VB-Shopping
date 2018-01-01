import React from "react";
import StoreCategoryItem from "./StoreCategoryItem";

const StoreCategoryList = ({
    categoryList,
    onDeleteClick,
    onEditClick,
}) => {
    return (
        <div>
            {categoryList.map(c =>
              <StoreCategoryItem
                  key={c.id}
                  value={c.name}
                  onDeleteClick={() => onDeleteClick(c.id)}
                  onEditClick={() => onEditClick(c.id)}>
              </StoreCategoryItem>)}
        </div>
    );
};

export default StoreCategoryList;