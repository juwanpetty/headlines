// Create Redux action types
export const GET_WEATHER = "GET_WEATHER";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILURE = "GET_WEATHER_FAILURE";

// Create Redux action creators that return an action
export const getWeather = () => ({
  type: GET_WEATHER,
});

export const getWeatherSuccess = (posts) => ({
  type: GET_WEATHER_SUCCESS,
  payload: posts,
});

export const getWeatherFailure = () => ({
  type: GET_WEATHER_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getWeather());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();

      dispatch(getWeatherSuccess(data));
    } catch (error) {
      dispatch(getWeatherFailure());
    }
  };
}
