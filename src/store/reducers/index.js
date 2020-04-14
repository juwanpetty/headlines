import { combineReducers } from "redux";

import sources from "../slices/sources";

const rootReducer = combineReducers({
  sources,
});

export default rootReducer;
