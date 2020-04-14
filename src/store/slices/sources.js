import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  sources: [],
  userSources: "",
  loading: false,
  hasErrors: false,
};

// A slice for sources with the three reducers
const sourcesSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {
    getSources: (state) => {
      state.loading = true;
    },
    getSourcesSuccess: (state, { payload }) => {
      state.sources = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getSourcesFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// Three actions generated from the slice
export const {
  getSources,
  getSourcesSuccess,
  getSourcesFailure,
} = sourcesSlice.actions;

// A selector
export const sourcesSelector = (state) => state.sources;

// The reducer
export default sourcesSlice.reducer;

// Asynchronous thunk action
export function fetchSources() {
  return async (dispatch) => {
    dispatch(getSources());

    try {
      const response = await fetch(
        `https://newsapi.org/v2/sources?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`
      );
      const data = await response.json();

      dispatch(getSourcesSuccess(data.sources));
    } catch (error) {
      dispatch(getSourcesFailure());
    }
  };
}
