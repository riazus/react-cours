import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     title: "test1",
//     author: "author1",
//   },
//   {
//     id: 2,
//     title: "test2",
//     author: "author2",
//   },
//   {
//     id: 3,
//     title: "test3",
//     author: "author3",
//   },
//   {
//     id: 4,
//     title: "test4",
//     author: "author4",
//   },
// ];

const librarySlice = createSlice({
  name: "library",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.splice(
        state.findIndex(({ id }) => id === action.payload),
        1
      );
    },
  },
});

export default librarySlice.reducer;
export const { addBook, deleteBook } = librarySlice.actions;
