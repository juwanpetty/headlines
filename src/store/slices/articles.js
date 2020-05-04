import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  articles: [],
  showArticles: true,
  loading: false,
  hasErrors: false,
  openIn: "same-tab", // new-tab
};

// A slice for articles with the three reducers
const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    getArticles: (state) => {
      state.loading = true;
    },
    getArticlesSuccess: (state, { payload }) => {
      state.articles = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getArticlesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    toggleShowArticles: (state) => {
      state.showArticles = !state.showArticles;
    },
    updateOpenIn: (state, { payload }) => {
      state.openIn = payload;
    },
  },
});

// Three actions generated from the slice
export const {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  toggleShowArticles,
  updateOpenIn,
} = articlesSlice.actions;

// A selector
export const articlesSelector = (state) => state.articles;

// The reducer
export default articlesSlice.reducer;

// Asynchronous thunk action
export function fetchArticles(sources) {
  return async (dispatch) => {
    dispatch(getArticles());

    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=9e0f251af2d2433793804d01f677f4ba`
      );
      const data = await response.json();

      dispatch(getArticlesSuccess(data.articles.slice(0, 3)));
    } catch (error) {
      dispatch(getArticlesFailure());
    }
  };
}
