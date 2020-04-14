import { combineReducers } from "redux";

import { weatherReducer, sourcesReducer } from "./";

const rootReducer = combineReducers({
  weather: weatherReducer,
  sources: sourcesReducer,
});

export default rootReducer;
