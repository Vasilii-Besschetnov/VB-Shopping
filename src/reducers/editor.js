import { combineReducers } from "redux";
import actionNames from "../actions/actionList";

const isEditing = (state = false, action) => {
    switch (action.type) {
        case actionNames.startCategoryRename:
            return true;
        case actionNames.cancelCategoryRename:
        case actionNames.renameCategory:
            return false;
        default:
            return state;
    }
};

const initialName = (state = null, action) => {
    switch (action.type) {
        case actionNames.startCategoryRename:
            return action.name;
        case actionNames.cancelCategoryRename:
            return null;
        default:
            return state;
    }
};

const currentName = (state = null, action) => {
     switch (action.type) {
        case actionNames.startCategoryRename:
         case actionNames.categoryNameChanged:
             return action.name;
        case actionNames.cancelCategoryRename:
            return null;
        default:
            return state;
    }   
};

export default combineReducers({
    isEditing,
    initialName,
    currentName
});

export const getIsEditing = (state) => state.isEditing;
export const getInitialName = (state) => state.initialName;
export const getCurrentName = (state) => state.currentName;