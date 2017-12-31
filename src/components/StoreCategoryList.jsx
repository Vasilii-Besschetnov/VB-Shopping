import React from "react";
import StoreCategoryItem from "./StoreCategoryItem";

const StoreCategoryList = ({ categoryList }) => {
    return (
        <div>
            {categoryList.map(c => <StoreCategoryItem
                                       key={c.id}
                                       {...c} />)}
        </div>
    );
};

export default StoreCategoryList;