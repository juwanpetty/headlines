// Create Redux action types
export const GET_SOURCES = "GET_SOURCES";
export const GET_SOURCES_SUCCESS = "GET_SOURCES_SUCCESS";
export const GET_SOURCES_FAILURE = "GET_SOURCES_FAILURE";

// Create Redux action creators that return an action
export const getSources = () => ({
  type: GET_SOURCES,
});

export const getSourcesSuccess = (sources) => ({
  type: GET_SOURCES_SUCCESS,
  payload: sources,
});

export const getSourcesFailure = () => ({
  type: GET_SOURCES_FAILURE,
});

// Combine them all in an asynchronous thunk
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
