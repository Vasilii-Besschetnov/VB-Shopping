import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import actions from "./actionList";
import * as fromReducers from "../reducers";

const categoriesSuccess = (categoryList) => ({
    type: actions.getCategoriesSuccess,
    response: categoryList
});

export const requestCategories = () => (dispatch) => api.getCategories().then((list) =>
    dispatch(categoriesSuccess(normalize(list, schema.arrayOfCategories))));


export const newCategoryNameChanged = name => ({
    type: actions.newCategoryNameChanged,
    name
});

export const addCategory = () => (dispatch, getState) =>
    api.addCategory(fromReducers.getCategoryName(getState())).then((cat) => {
        dispatch({
            type: actions.addCategory,
            response: normalize(cat, schema.storeCategory)
        });
    });

const getDeleteCategory = (id) => ({
    type: actions.deleteCategory,
    id
});

export const deleteCategory = (id) => dispatch =>
    api.deleteCategory(id).then(() => dispatch(getDeleteCategory(id)));