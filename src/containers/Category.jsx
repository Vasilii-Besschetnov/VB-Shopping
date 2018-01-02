import React from "react";
import { isBrowser } from 'react-device-detect';
import { connect } from "react-redux";
import StoreCategoryItem from "../components/StoreCategoryItem";
import CategoryEditor from "./CategoryEditor";
import * as selectors from "../reducers";
import { deleteCategory, startCategoryRename} from "../actions";

const mapStateToProps = (state, {categoryId}) => ({
    value: selectors.getCategory(state, categoryId).name,
    isEditing: selectors.getIsEditing(state, categoryId),
});

const dispatchToProps = (dispatch, {categoryId}) => ({
    onDeleteClick: () => dispatch(deleteCategory(categoryId)),
    onEditClick: () => dispatch(startCategoryRename(categoryId))
});

let Category = (props) => {
    const {
        categoryId,
        deviceMode,
        ...rest
    } = props;
    
    const editor = <CategoryEditor categoryId={categoryId}/>
    return (
        <StoreCategoryItem {...rest}
            editor={editor}
            isDblClickEdit={isBrowser}/>
    );
};


Category = connect(mapStateToProps, dispatchToProps)(Category);

export default Category;