import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // required by react-redux-form - use sagas for custom async actions
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";
import rootSaga from "../sagas";

import { routerMiddleware } from "react-router-redux";

// Build the middleware for intercepting and dispatching navigation actions
const _routerMiddleware = routerMiddleware();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk, _routerMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
