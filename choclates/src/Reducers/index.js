import {combineReducers}from "redux";
import ChoclateReducer from "./ChoclateReducer";
const rootReducer = combineReducers({
    choclateState:ChoclateReducer,
    brandState:ChoclateReducer,
});
export default rootReducer;