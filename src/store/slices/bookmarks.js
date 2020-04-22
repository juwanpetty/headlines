import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  bookmarks: [],
};

const bookmarksSlide = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state) => {
      state.bookmarks = "";
    },
    removeBookmarks: (state) => {
      state.bookmarks = "";
    },
  },
});

export const { addBookmark, removeBookmarks } = bookmarksSlide.actions;

export const bookmarksSelector = (state) => state.bookmarks;

export default bookmarksSlide.reducer;
