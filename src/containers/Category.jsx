import React from "react";
import { connect } from "react-redux";
import StoreCategoryItem from "../components/StoreCategoryItem";
import * as selectors from "../reducers";
import { deleteCategory, startCategoryRename} from "../actions";

const mapStateToProps = (state, ownProps) => ({
    value: selectors.getCategory(state, ownProps.categoryId).name,
    isEditing: selectors.getIsEditing(state, ownProps.categoryId),
});

const dispatchToProps = (dispatch, ownProps) => ({
    onDeleteClick: () => dispatch(deleteCategory(ownProps.categoryId)),
    onEditClick: () => dispatch(startCategoryRename(ownProps.categoryId))
});

let Category = (props) => {    
    return (
        <StoreCategoryItem {...props} />
    );
};


Category = connect(mapStateToProps, dispatchToProps)(Category);

export default Category;