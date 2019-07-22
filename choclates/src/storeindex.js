
          import { createStore, applyMiddleware } from "redux";
 import ChoclateReducer from "../reducers/ChaclateReducer";
 import createSagaMiddleware from "redux-saga";
 import { choclateWatcherSaga } from "../sagas";
 import logger from "redux-logger";
 import {composeWithDevTools }from "redux-devtools-extension";
import rootReducer from "../reducers";
 
 const sagaMiddleware = createSagaMiddleware();
 
 const store = createStore(
 rootReducer,
 composeWithDevTools(applyMiddleware(sagaMiddleware,logger))
 );
  
 sagaMiddleware.run(choclateWatcherSaga);
 
 export default store