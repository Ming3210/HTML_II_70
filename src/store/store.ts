import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    cartReducer,
    productReducer
})

const store = createStore(rootReducer)

export default store;