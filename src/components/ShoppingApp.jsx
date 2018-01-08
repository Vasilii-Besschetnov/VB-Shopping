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
        <Provider store={createStore()}>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/Categories" component={Categories} />
                    <Route path="/Stores" component={Stores} />
                    <Route path="/Resume" component={Resume} />
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default ShoppingApp;