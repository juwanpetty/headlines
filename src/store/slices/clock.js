import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  showClock: true,
  dateTimeFormat: { value: "date-time", label: "Date and Time" }, // or date-only, time-only
  timeFormat: "12", // or 24
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    toggleShowClock: (state) => {
      state.showClock = !state.showClock;
    },
    updateDateTimeFormat: (state, { payload }) => {
      state.dateTimeFormat = payload;
    },
    updateTimeFormat: (state, { payload }) => {
      state.timeFormat = payload;
    },
  },
});

export const {
  toggleShowClock,
  updateDateTimeFormat,
  updateTimeFormat,
} = clockSlice.actions;

export const clockSelector = (state) => state.clock;

export default clockSlice.reducer;
