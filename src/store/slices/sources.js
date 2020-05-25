import { createSlice } from "@reduxjs/toolkit";
import shuffle from "shuffle-array";
import { loadState } from "../../helpers/localStorage";

export const initialState = {
  sources: [],
  userSources: [],
  sidebarSources: [],
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
    updateUserSources: (state, { payload }) => {
      state.userSources = payload;
    },
    updateSidebarSources: (state, { payload }) => {
      state.sidebarSources = payload;
    },
  },
});

// Three actions generated from the slice
export const {
  getSources,
  getSourcesSuccess,
  getSourcesFailure,
  updateUserSources,
  updateSidebarSources,
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
        `https://newsapi-proxy-server.herokuapp.com/sources`
      );
      const data = await response.json();

      const userSourcesExist = loadState().sources.userSources.length > 0;

      if (!userSourcesExist) {
        let shuffledSources = shuffle(data.sources, { copy: true });
        shuffledSources = shuffledSources
          .slice(0, 3)
          .map((source) => source.id);

        dispatch(updateUserSources(shuffledSources));
      }

      dispatch(getSourcesSuccess(data.sources));
    } catch (error) {
      dispatch(getSourcesFailure());
    }
  };
}
