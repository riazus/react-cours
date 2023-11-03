import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  comments: [],
  error: "",
};

// export const fetchComments = createAsyncThunk("comments/fetchComments", () => {
//   return (
//     axios
//       .get("https://jsonplaceholder.typicode.com/comments")
//       /*
//       RequestStatus: 'Pending', 'Fullfilled', 'Rejected'
//       // version 1
//       Action: {
//         type: comments/fetchComments/pending,
//         meta: {requestId: string, requestStatus: 'pending'}
//       }

//       Action: {
//         type: comments/fetchComments/fullfilled,
//         payload: []
//         meta: {requestId: string, requestStatus: 'pending'}
//       }

//       Action: {
//         type: comments/fetchComments/rejected,
//         meta: {requestId: string, requestStatus: 'pending'}
//         error: {name: string, message: string, code: string}
//       }

//     */
//       .then((res) => res.data)
//   );
// });

export const fetchComments = createAsyncThunk("comments/fetchComments", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.data);
});

const commentSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
      state.error = "";
    });
    builder.addCase(fetchComments.rejected, (state) => {
      state.isLoading = false;
      state.comments = [];
      state.error = action.error.message;
    });
  },
});

export default commentSlice.reducer;
