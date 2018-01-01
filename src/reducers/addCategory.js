import actionNames from "../actions/actionList";


const categoryName = (state = "", action) => {
    switch (action.type) {
        case actionNames.newCategoryNameChanged:
            return action.name;
        case actionNames.addCategory:
            return "";
        default:
            return state;
    }
};

export default categoryName;

export const getCategoryName = state => state;