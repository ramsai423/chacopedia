import { createStore, applyMiddleware } from "redux";
//import ChoclateReducer from "./Reducers/ChoclateReducer";
import { chocolateWatcherSaga } from "./saga";
import createSagaMiddleware from "redux-saga"
import rootReducer from"./Reducers/index"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(chocolateWatcherSaga)
export default store;