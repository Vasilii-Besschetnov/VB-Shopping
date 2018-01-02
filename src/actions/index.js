import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import actionNames from "./actionList";
import * as selectors from "../reducers";

const categoriesSuccess = (categoryList) => ({
    type: actionNames.getCategoriesSuccess,
    response: categoryList
});

export const requestCategories = () => (dispatch) => api.getCategories().then((list) =>
    dispatch(categoriesSuccess(normalize(list, schema.arrayOfCategories))));


export const newCategoryNameChanged = name => ({
    type: actionNames.newCategoryNameChanged,
    name
});

export const addCategory = () => (dispatch, getState) =>
    api.addCategory(selectors.getCategoryName(getState())).then((cat) => {
        dispatch({
            type: actionNames.addCategory,
            response: normalize(cat, schema.storeCategory)
        });
    });

export const deleteCategory = (id) => dispatch =>
    api.deleteCategory(id).then(() => dispatch({
    type: actionNames.deleteCategory,
    id
}));

export const startCategoryRename = (id) => (dispatch, getState) => {
    dispatch({
        type: actionNames.startCategoryRename,
        id,
        name: selectors.getCategory(getState(), id).name
    });
};

export const renameCategory = (id, name) => dispatch =>
    api.renameCategory(id, name).then((result) => {
        if (result.errorMessage) {
            dispatch({
                type: actionNames.renameCategoryError,
                message: result.errorMessage
            });
        }
        else {
            dispatch({
                type: actionNames.renameCategory,
                response: result.category
            })
        }
    })