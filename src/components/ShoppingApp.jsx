import React from "react";
import { BrowserRouter }  from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../configureStore.js";
import Categories from "../Portal/Categories.jsx";

const ShoppingApp = (props) => {
    return (
        <Provider store={createStore()}>
            <BrowserRouter>
                <Categories />
            </BrowserRouter>
        </Provider>
    );
}

export default ShoppingApp;