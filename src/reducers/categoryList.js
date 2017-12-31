import { combineReducers } from "redux";
import actionNames from "../actions/actionList";

console.log(actionNames);

const categoryIds = (state = [], action) => {
    switch (action.type) {
        case actionNames.getCategoriesSuccess:
            return action.response.result;
        default:
            return state;
    }
};

const categoryById = (state = {}, action) => {
    if (action.response) {
        return {
                ...state,
                ...action.response.entities.StoreCategories
               };
    }
    return state;
};

export default combineReducers({
    categoryById,
    categoryIds
})

export const getCategories = (state) =>
    state.categoryIds.map(id => state.categoryById[id]);