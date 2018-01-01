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

const editableFields = (state = {}, action) => {
    const info = state[action.id];
    switch (action.type) {
        case actionNames.startCategoryRename:
        case actionNames.cancelCategoryRename:
            return {
                [action.id]: editor(info, action)
            };
        default:
            return state;
    }
}


export default combineReducers({
    categoryById,
    categoryIds,
    editableFields
})

export const getCategory = (state, id) => state.categoryById[id];

export const getCategories = (state) =>
    state.categoryIds.map(id => getCategory(state, id));

export const getIsEditing = (state, categoryId) =>
    fromEditor.getIsEditing(state.editableFields[categoryId]);