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
    updateTimeFormat: (state, { payload }) => {
      state.timeFormat = payload;
    },
  },
});

export const {
  toggleShowClock,
  toggleClockView,
  updateTimeFormat,
} = clockSlice.actions;

export const clockSelector = (state) => state.clock;

export default clockSlice.reducer;
