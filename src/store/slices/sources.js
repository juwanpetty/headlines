import { createSlice } from "@reduxjs/toolkit";
import shuffle from "shuffle-array";
import { sourcesData } from "../../mock/sourcesData";

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
// export function fetchSources() {
//   return async (dispatch) => {
//     dispatch(getSources());

//     try {
//       const response = await fetch(
//         `https://newsapi.org/v2/sources?country=us&apiKey=9e0f251af2d2433793804d01f677f4ba`
//       );
//       const data = await response.json();

//       dispatch(getSourcesSuccess(data.sources));
//     } catch (error) {
//       dispatch(getSourcesFailure());
//     }
//   };
// }

export function fetchSources() {
  return async (dispatch) => {
    dispatch(getSources());

    try {
      dispatch(getSourcesSuccess(sourcesData.sources));

      // // check if there are any saved sources in localStorage
      if (!localStorage.getItem("sources")) {
        let shuffledSources = shuffle(sourcesData.sources, { copy: true });
        shuffledSources = shuffledSources
          .slice(0, 3)
          .map((source) => source.id);

        dispatch(updateUserSources(shuffledSources));
      } else {
        dispatch(updateUserSources(localStorage.getItem("sources")));
      }
    } catch (error) {
      dispatch(getSourcesFailure());
    }
  };
}
