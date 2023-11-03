import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../features/library/librarySlice";

const store = configureStore({
  reducer: {
    books: libraryReducer,
  },
});

export default store;
