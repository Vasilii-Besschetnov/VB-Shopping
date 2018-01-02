import React from "react";
import { connect } from "react-redux";
import * as selectors from "../reducers";
import { categoryNameChanged, renameCategory, cancelCategoryRename } from "../actions";
import TextBox from "../components/TextBox";
import bindUtil from "../utils/bind";

const mapStateToProps = (state) => ({
    value: selectors.getCurrentName(state),
});

const dispatchToProps = (dispatch, { categoryId }) => ({
    onChange: (e) => dispatch(categoryNameChanged(e.target.value)),
    renameCategory: () => dispatch(renameCategory(categoryId)),
    cancelCategoryRename: () => dispatch(cancelCategoryRename()),
});

class CategoryEditor extends React.Component {
    constructor(props) {
        super(props);
        
        bindUtil(this, this._onBlur, this._onKeyUp);
    }
    
    componentDidMount() {
        const value = this._input.value;
        this._input.focus();
        this._input.setSelectionRange(0, value.length)
    }
    
    render() {
        const {
            categoryId,
            renameCategory,
            cancelCategoryRename,
            ...rest
        } = this.props;
        
        return (
            <TextBox {...rest}
                onRef={(el) => this._input = el}
                onBlur={this._onBlur}
                onKeyUp={this._onKeyUp}
                />
        );
    };
    
    _onBlur(e) {
        this.props.renameCategory();
    }
    
    _onKeyUp(e) {        
        switch (e.key) {
            case "Enter":
                this.props.renameCategory();
                break;
            case "Escape":
                this.props.cancelCategoryRename();
                break;
            default:
                //do nothing
        }
    }
}

CategoryEditor = connect(mapStateToProps, dispatchToProps)(CategoryEditor);

export default CategoryEditor;