import { combineReducers } from "redux";
import categoryList, * as fromCategories from "./categoryList";
import categoryName, * as fromCategoryName from "./addCategory";

export default combineReducers({
    categoryList,
    categoryName
});

export const getCategories = (state) => fromCategories.getCategories(state.categoryList);
export const getCategoryName = (state) => fromCategoryName.getCategoryName(state.categoryName);