import React from "react";
import { BrowserRouter, Route }  from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../configureStore.js";
import Categories from "../Portal/Categories.jsx";
import Header from "../containers/Header";

const ShoppingApp = (props) => {
    return (
        <Provider store={createStore()}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/Categories" component={Categories} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default ShoppingApp;