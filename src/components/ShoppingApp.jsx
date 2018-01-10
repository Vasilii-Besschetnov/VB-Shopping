import React from "react";
import { BrowserRouter, Route }  from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "../configureStore.js";
import Categories from "../Portal/Categories.jsx";
import Stores from "src/Portal/Stores/Stores";
import Header from "../containers/Header";
import Resume from "src/Resume/components/Resume";

const ShoppingApp = (props) => {
    return (
        <Resume />
    );
}

export default ShoppingApp;