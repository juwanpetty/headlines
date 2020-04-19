import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  showClock: true,
  clockView: "digital", // or analog
  timeFormat: "12", // or 24
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    toggleShowClock: (state) => {
      state.showClock = !state.showClock;
    },
    toggleClockView: (state) => {
      state.clockView = !state.clockView;
    },
    toggleTimeFormat: (state) => {
      state.timeFormat = !state.timeFormat;
    },
  },
});

export const {
  toggleShowClock,
  toggleClockView,
  toggleTimeFormat,
} = clockSlice.actions;

export const clockSelector = (state) => state.clock;

export default clockSlice.reducer;
