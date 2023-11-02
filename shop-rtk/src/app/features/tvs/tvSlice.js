import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tvs: 10,
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    tvs: (state) => {
      state.tvs--;
    },
  },
});

export default tvSlice.reducer;
export const { tvs } = tvSlice.actions;
