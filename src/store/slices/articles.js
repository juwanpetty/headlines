import { createSlice } from "@reduxjs/toolkit";
import { articlesData } from "../../mock/articlesData";

export const initialState = {
  articles: [],
  showArticles: true,
  loading: false,
  hasErrors: false,
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
  },
});

// Three actions generated from the slice
export const {
  getArticles,
  getArticlesSuccess,
  getArticlesFailure,
  toggleShowArticles,
} = articlesSlice.actions;

// A selector
export const articlesSelector = (state) => state.articles;

// The reducer
export default articlesSlice.reducer;

// Asynchronous thunk action
// export function fetchArticles(sources) {
//   console.log("These sources will be used to fetch:", sources);

//   return async (dispatch) => {
//     dispatch(getArticles());

//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=9e0f251af2d2433793804d01f677f4ba`
//       );
//       const data = await response.json();

//       console.log(data.articles.slice(0, 3));
//       dispatch(getArticlesSuccess(data.articles.slice(0, 3)));
//     } catch (error) {
//       dispatch(getArticlesFailure());
//     }
//   };
// }

export function fetchArticles(sources) {
  console.log("These sources will be used to fetch:", sources);

  return async (dispatch) => {
    dispatch(getArticles());

    try {
      const data = articlesData;

      dispatch(getArticlesSuccess(data.articles.slice(0, 3)));
    } catch (error) {
      dispatch(getArticlesFailure());
    }
  };
}
