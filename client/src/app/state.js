import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  browserLocation: "brisbane",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleViewMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setBrowserLocation(state, action) {
      state.browserLocation = action.payload;
    },
  },
});

export const { toggleViewMode, setBrowserLocation } = globalSlice.actions;
export default globalSlice.reducer;
