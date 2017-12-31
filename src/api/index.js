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