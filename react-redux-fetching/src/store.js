import { createStore, applyMiddleware } from "redux";
const thunk = ("redux-thunk").default;

import todosReducer from "./services/reducers/todosReducers";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;
