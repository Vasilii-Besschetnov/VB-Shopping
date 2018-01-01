import { combineReducers } from "redux";
import categoryList, * as fromCategories from "./categoryList";
import categoryName, * as fromCategoryName from "./addCategory";

export default combineReducers({
    categoryList,
    categoryName
});


export const getCategoryName = (state) => fromCategoryName.getCategoryName(state.categoryName);

export const getCategory = (state, id) => fromCategories.getCategory(state.categoryList, id);
export const getCategories = (state) => fromCategories.getCategories(state.categoryList);
export const getIsEditing = (state, categoryId) => fromCategories.getIsEditing(state.categoryList);