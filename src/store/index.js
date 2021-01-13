import { createStore, combineReducers } from "redux";
import filtersReducer from "./filterReducer";
import todosReducer from "./todosReducer";

export default createStore(
  combineReducers({
    todos: todosReducer,
    filter: filtersReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
