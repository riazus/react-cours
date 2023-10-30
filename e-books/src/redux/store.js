import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducerAddBooks from "./reducers/reducerAddBooks";
import reducerFetchedBooks from "./reducers/reducerFetchBooks";

const rootReducer = combineReducers({
  library: reducerAddBooks,
  search: reducerFetchedBooks,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
