import categoryList, * as fromCategories from "./categoryList";

export default categoryList;

export const getCategories = (state) => fromCategories.getCategories(state);