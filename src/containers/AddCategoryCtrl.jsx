import React from "react";
import { connect } from "react-redux";
import AddItem from "src/components/AddItem";
import { newCategoryNameChanged, addCategory } from "../actions";
import * as fromReducers from "../reducers";

let AddCategoryCtrl = (props) => {
    return (
        <AddItem buttonText="Add Category" {...props}/>
    );
}
AddCategoryCtrl = connect((state, ownProps) => ({
    value: fromReducers.getCategoryName(state)
}), (dispatch, ownProps) => ({ 
    onChange: (e) => dispatch(newCategoryNameChanged(e.target.value)),
    onAddClick: () => dispatch(addCategory())
}))(AddCategoryCtrl);
                          
export default AddCategoryCtrl;