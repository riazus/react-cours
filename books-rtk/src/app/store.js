import { configureStore } from "@reduxjs/toolkit";
import libraryReducer from "../features/library/librarySlice";
import fetchBooksReducer from "../features/fetchBooks/fetchBooksSlice";

const store = configureStore({
  reducer: {
    books: libraryReducer,
    search: fetchBooksReducer,
  },
});

export default store;
