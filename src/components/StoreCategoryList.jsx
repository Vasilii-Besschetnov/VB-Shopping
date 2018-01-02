import React from "react";
import Category from "../containers/Category";

const StoreCategoryList = ({
    categoryList // array of ids
}) => {
    return (
        <div>
            {categoryList.map(cId =>
              <Category
                  key={cId}
                  categoryId={cId}/>)}
        </div>
    );
};

export default StoreCategoryList;