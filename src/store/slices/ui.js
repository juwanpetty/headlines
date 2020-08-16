import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  theme: "dark", // dark or light
  isSidebarOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    updateTheme: (state, { payload }) => {
      state.theme = payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { updateTheme, toggleSidebar } = uiSlice.actions;

export const uiSelector = (state) => state.ui;

export default uiSlice.reducer;
