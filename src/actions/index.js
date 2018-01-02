import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import actionNames from "../enums/actionList";
import * as selectors from "../reducers";

export const requestCategories = () => (dispatch) => api.getCategories()
    .then((list) => dispatch({
        type: actionNames.getCategoriesSuccess,
        response: normalize(list, schema.arrayOfCategories)
    }));


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

export const categoryNameChanged = name => ({
    type: actionNames.categoryNameChanged,
    name
});

export const cancelCategoryRename = () => ({
    type: actionNames.cancelCategoryRename
});

export const renameCategory = (id) => (dispatch, getState) => {
    const name = selectors.getCurrentName(getState()),
          originalName = selectors.getCategory(getState(), id).name;
    
    if (originalName === name) { // if name is not changed, it is does not make sense to rename a category
        dispatch(cancelCategoryRename());
        return Promise.resolve();
    }

    dispatch({
        type: actionNames.requestRenameCategory,
        id,
        name
    });
    return api.renameCategory(id, name).then((result) => {
        if (result.errorMessage) {
            dispatch({
                type: actionNames.renameCategoryError,
                message: result.errorMessage
            });
        }
        else {
            dispatch({
                type: actionNames.renameCategory,
                response: normalize(result.category, schema.storeCategory)
            })
        }
    });
};