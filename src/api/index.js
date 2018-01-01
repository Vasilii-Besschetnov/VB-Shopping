const categoryList = [
    {
        id: 1,
        name: "Food"            
    },
    {
        id: 2,
        name: "Home"
    }
];
export const getCategories = () => {
    return new Promise((resolve) => {
        resolve(categoryList);
    });
};

export const deleteCategory = (catId) => {
    return Promise.resolve(catId);
};

let id = -1;
export const addCategory = (name) => {
    const newCat = {
        id: id--,
        name
    };
    categoryList.push(newCat);
    return Promise.resolve(newCat);
}