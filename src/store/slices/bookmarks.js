import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  bookmarks: [],
};

const bookmarksSlide = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {
    addBookmark: (state, { payload }) => {
      state.bookmarks = [payload, ...state.bookmarks];
    },
    removeBookmark: (state, { payload }) => {
      state.bookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.title !== payload.title
      );
    },
  },
});

export const { addBookmark, removeBookmark } = bookmarksSlide.actions;

export const bookmarksSelector = (state) => state.bookmarks;

export default bookmarksSlide.reducer;
