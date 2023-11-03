import { createSlice } from "@reduxjs/toolkit";
import { addPhones } from "../phones/phoneSlice";

const initialState = {
  tvs: 20,
};

const tvSlice = createSlice({
  name: "tv",
  initialState,
  reducers: {
    tvs: (state, action) => {
      state.tvs -= action.payload;
    },
    addTvs: (state, action) => {
      state.tvs += Number.parseInt(action.payload);
    },
  },
});

export default tvSlice.reducer;
export const { tvs, addTvs } = tvSlice.actions;
