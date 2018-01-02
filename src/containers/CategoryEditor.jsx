import React from "react";
import { connect } from "react-redux";
import * as selectors from "../reducers";
import { deleteCategory, startCategoryRename} from "../actions";
import TextBox from "../components/TextBox";


let CategoryEditor = (props) => {
    return (<TextBox />);
};

CategoryEditor = connect()(CategoryEditor);

export default CategoryEditor;