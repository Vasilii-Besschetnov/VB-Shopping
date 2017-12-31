import React, { Component } from "react";
import { connect } from "react-redux";
import StoreCategoryList from "../components/StoreCategoryList";
import * as selectors from "../reducers";
import * as actions from "../actions";

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

const mapStateToProps = (state, ownProps) => ({
    categoryList: selectors.getCategories(state)
});

CategoryList = connect(mapStateToProps, actions )(CategoryList);

export default CategoryList;