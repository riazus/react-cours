import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducerAddBooks from "./reducers/reducerAddBooks";

const rootReducer = combineReducers({
  library: reducerAddBooks,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
