import { schema } from 'normalizr';

export const storeCategory = new schema.Entity("StoreCategories");
export const arrayOfCategories = new schema.Array(storeCategory);