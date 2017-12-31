import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import actions from "./actionList";

const categoriesSuccess = (categoryList) => ({
    type: actions.getCategoriesSuccess,
    response: categoryList
});

export const requestCategories = () => (dispatch) => api.getCategories().then((list) =>
    dispatch(categoriesSuccess(normalize(list, schema.arrayOfCategories))));