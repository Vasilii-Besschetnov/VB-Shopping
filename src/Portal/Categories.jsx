import React from "react";
import CategoryList from "../containers/CategoryList";
import AddCategoryCtrl from "../containers/AddCategoryCtrl";


const Categories = (props) => {
    return (
        <div>
            <AddCategoryCtrl />
            <CategoryList />
        </div>
    );
};


export default Categories;