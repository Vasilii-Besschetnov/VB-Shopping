import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const createShoppingStore = () => {
    const middlewares = [thunk];
    
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }
    
    return createStore(reducer, applyMiddleware(...middlewares));
}


export default createShoppingStore;