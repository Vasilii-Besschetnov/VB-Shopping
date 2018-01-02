import React from "react";
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
        ...rest
    } = props;
    
    const editor = <CategoryEditor categoryId={categoryId}/>
    return (
        <StoreCategoryItem {...rest} editor={editor} />
    );
};


Category = connect(mapStateToProps, dispatchToProps)(Category);

export default Category;