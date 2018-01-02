import React, { Component } from "react";
import { connect } from "react-redux";
import StoreCategoryList from "../components/StoreCategoryList";
import * as selectors from "../reducers";
import { requestCategories } from "../actions";

const mapStateToProps = (state, ownProps) => ({
    categoryList: selectors.getCategoryIds(state)
});

const dispatchToProps = {
    requestCategories
};

class CategoryList extends Component {
    componentDidMount() {
        this.props.requestCategories();
    }
    
    render() {
        return (
            <StoreCategoryList {...this.props} />
        );
    }
}

CategoryList = connect(mapStateToProps, dispatchToProps)(CategoryList);

export default CategoryList;