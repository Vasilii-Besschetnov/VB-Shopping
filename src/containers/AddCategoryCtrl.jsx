import React from "react";
import { connect } from "react-redux";
import AddItem from "../components/AddItem";
import { getNewCategoryNameChanged, getAddCategory } from "../actions";
import * as fromReducers from "../reducers";

let AddCategoryCtrl = (props) => {
    return (
        <AddItem
            buttonText="Add Category" {...props}/>
    );
}
AddCategoryCtrl = connect((state, ownProps) => ({
    value: fromReducers.getCategoryName(state)
}), (dispatch, ownProps) => ({ 
    onChange: (e) => dispatch(getNewCategoryNameChanged(e.target.value)),
    onAddClick: () => dispatch(getAddCategory(ownProps.value))
}))(AddCategoryCtrl);
                          
export default AddCategoryCtrl;