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
};

export const renameCategory = (id, name) => {
    const res = {
        errorMessage: null,
        category: null
    }
    name = name.trim();
    const errorMessage = categoryList.every(c => c.id === id || c.name !== name) ? null :
        "A category with such name alredy exists";
    res.errorMessage = errorMessage;
    if (!errorMessage) {
        const c = categoryList.find(c => c.id === id);
        c.name = name;
        res.category = c;
    }
    
    return res;
}