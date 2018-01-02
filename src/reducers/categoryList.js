import { combineReducers } from "redux";
import actionNames from "../actions/actionList";
import editor, * as fromEditor from "./editor.js";

const categoryIds = (state = [], action) => {
    switch (action.type) {
        case actionNames.getCategoriesSuccess:
            return action.response.result;
        case actionNames.addCategory:
            return [...state, action.response.result];
        case actionNames.deleteCategory:
            return state.filter(id => id !== action.id);
        default:
            return state;
    }
};

const categoryById = (state = {}, action) => {
    if (action.type === actionNames.deleteCategory) {
        const {
            [action.id]: deletedCat,
            ...rest
        } = state;
        return rest;
    }
    if (action.response) {
        return {
                ...state,
                ...action.response.entities.StoreCategories
               };
    }
    return state;
};

const editableCategoryId = (state = null, action) => {
    switch (action.type) {
        case actionNames.startCategoryRename:
            return action.id;
        case actionNames.cancelCategoryRename:
            return null;
        default:
            return state;
    }
}


export default combineReducers({
    categoryById,
    categoryIds,
    editableCategoryId,
    editor,
})

export const getCategory = (state, id) => state.categoryById[id];

export const getCategoryIds = (state) => state.categoryIds;

export const getCategories = (state) =>
    state.categoryIds.map(id => getCategory(state, id));

export const getIsEditing = (state, categoryId) => {
    return state.editableCategoryId === categoryId &&
            fromEditor.getIsEditing(state.editor);
};

export const getCurrentName = state => fromEditor.getCurrentName(state.editor);