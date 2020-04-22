import { createSlice } from "@reduxjs/toolkit";
import { weatherData } from "../../mock/weatherData";

export const initialState = {
  weather: [],
  showWeather: true,
  weatherUnit: "imperial",
  loading: false,
  hasErrors: false,
};

// A slice for weather with the three reducers
const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather: (state) => {
      state.loading = true;
    },
    getWeatherSuccess: (state, { payload }) => {
      state.weather = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getWeatherFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    toggleShowWeather: (state) => {
      state.showWeather = !state.showWeather;
    },
    updateWeahterUnit: (state, { payload }) => {
      state.weatherUnit = payload;
    },
  },
});

// Three actions generated from the slice
export const {
  getWeather,
  getWeatherSuccess,
  getWeatherFailure,
  toggleShowWeather,
  updateWeahterUnit,
} = weatherSlice.actions;

// A selector
export const weatherSelector = (state) => state.weather;

// The reducer
export default weatherSlice.reducer;

// // Asynchronous thunk action
// export function fetchWeather(latitude, longitude, error) {
//   return async (dispatch) => {
//     dispatch(getWeather());

//     try {
//       const response = await fetch(
//         `http://api.weatherapi.com/v1/current.json?key=48e88fd7d13f45ee93e230521201404&q=${latitude},${longitude}`
//       );
//       const data = await response.json();

//       dispatch(getWeatherSuccess(data));
//     } catch (error) {
//       dispatch(getWeatherFailure());
//     }
//   };
// }

// Asynchronous thunk action
export function fetchWeather(latitude, longitude, error) {
  return (dispatch) => {
    dispatch(getWeather());

    try {
      dispatch(getWeatherSuccess(weatherData));
    } catch (error) {
      dispatch(getWeatherFailure());
    }
  };
}
