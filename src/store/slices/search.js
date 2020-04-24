import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  showSearch: true,
  searchEngine: { value: "google", label: "Google" }, // or duckduckgo, bing
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    toggleShowSearch: (state) => {
      state.showSearch = !state.showSearch;
    },
    updateSearchEngine: (state, { payload }) => {
      state.searchEngine = payload;
    },
  },
});

export const { toggleShowSearch, updateSearchEngine } = searchSlice.actions;

export const searchSelector = (state) => state.search;

export default searchSlice.reducer;
