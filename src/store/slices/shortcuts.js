import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  shortcuts: [],
  showShortcuts: true,
  openIn: { value: "same-tab", label: "Same tab" }, // new-tab or "new-tab-background"
};

const shortcutsSlice = createSlice({
  name: "shortcuts",
  initialState,
  reducers: {
    addShortcut: (state, { payload }) => {
      state.shortcuts = [...state.shortcuts, payload];
    },
    updateShortcut: (state, { payload }) => {
      state.shortcuts = state.shortcuts.map((shortcut) => {
        if (shortcut.id === payload.id) {
          return {
            ...shortcut,
            ...payload,
          };
        } else {
          return shortcut;
        }
      });
    },
    removeShortcut: (state, { payload }) => {
      state.shortcuts = state.shortcuts.filter(
        (shortcut) => shortcut.id !== payload
      );
    },
    toggleShowShortcuts: (state) => {
      state.showShortcuts = !state.showShortcuts;
    },
    updateOpenIn: (state, { payload }) => {
      state.openIn = payload;
    },
  },
});

export const {
  addShortcut,
  updateShortcut,
  removeShortcut,
  toggleShowShortcuts,
  updateOpenIn,
} = shortcutsSlice.actions;

export const shortcutsSelector = (state) => state.shortcuts;

export default shortcutsSlice.reducer;
