import { combineReducers } from "redux";

import sources from "../slices/sources";
import weather from "../slices/weather";
import articles from "../slices/articles";
import ui from "../slices/ui";

const rootReducer = combineReducers({
  sources,
  articles,
  weather,
  ui,
});

export default rootReducer;
