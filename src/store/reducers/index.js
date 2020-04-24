import { combineReducers } from "redux";

import bookmarks from "../slices/bookmarks";
import sources from "../slices/sources";
import weather from "../slices/weather";
import articles from "../slices/articles";
import clock from "../slices/clock";
import search from "../slices/search";
import ui from "../slices/ui";

const rootReducer = combineReducers({
  bookmarks,
  sources,
  articles,
  weather,
  clock,
  search,
  ui,
});

export default rootReducer;
