import { createSlice } from "@reduxjs/toolkit";
import { addTvs, tvs as tvActions } from "../tvs/tvSlice";

const initialState = {
  phones: 5,
  tablets: 10,
};

const phoneSlice = createSlice({
  name: "phone",
  initialState,
  reducers: {
    phones: (state, action) => {
      state.phones -= action.payload;
    },
    tablets: (state, action) => {
      state.tablets -= action.payload;
    },
    addPhones: (state, action) => {
      state.phones += Number.parseInt(action.payload);
    },
    addTablets: (state, action) => {
      state.tablets += Number.parseInt(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(tvActions, (state, action) => {
      state.phones -= action.payload;
    });
    builder.addCase(addTvs, (state, action) => {
      state.phones += Number.parseInt(action.payload);
    });
  },
});

export default phoneSlice.reducer;
export const { phones, tablets, addPhones, addTablets } = phoneSlice.actions;
