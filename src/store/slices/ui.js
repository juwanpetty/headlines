import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  darkTheme: false,
  isSidebarOpen: true,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleTheme, toggleSidebar } = uiSlice.actions;

export const uiSelector = (state) => state.ui;

export default uiSlice.reducer;
