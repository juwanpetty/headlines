import * as actions from "../actions/weatherAction";

const weatherReducerDefaultState = {
  weather: [],
  weatherUnit: "degrees",
  showWeather: true,
  loading: false,
  hasErrors: false,
};

// Weather Reducer
export const weatherReducer = (state = weatherReducerDefaultState, action) => {
  switch (action.type) {
    case actions.GET_WEATHER:
      return { ...state, loading: true };
    case actions.GET_WEATHER_SUCCESS:
      return { weather: action.payload, loading: false, hasErrors: false };
    case actions.GET_WEATHER_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};
