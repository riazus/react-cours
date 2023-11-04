import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  books: [],
  error: "",
};

export const fetchBooks = createAsyncThunk("fetchBooks/fetch", (subject) => {
  return axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${subject}&maxResults=20`
    )
    .then((res) => res.data);
});

const fetchBooksSlice = createSlice({
  name: "fetchBooks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload.items;
      state.error = "";
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default fetchBooksSlice.reducer;
