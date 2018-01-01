import actionNames from "../actions/actionList";

const isEditing = (state = false, action) => {
    switch (action.type) {
        case actionNames.startCategoryRename:
            return true;
        case actionNames.cancelCategoryRename:
            return false;
        default:
            return state;
    }
};

export default isEditing;

export const getIsEditing = (state) => state.isEditing;