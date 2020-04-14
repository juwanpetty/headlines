import * as actions from "../actions/sourcesAction";

const sourcesReducerDefaultState = {
  sources: [],
  userSources: "",
  loading: false,
  hasErrors: false,
};

// Sources Reducer
const sourcesReducer = (state = sourcesReducerDefaultState, action) => {
  switch (action.type) {
    case actions.GET_SOURCES:
      return { ...state, loading: true };
    case actions.GET_SOURCES_SUCCESS:
      return { sources: action.payload, loading: false, hasErrors: false };
    case actions.GET_SOURCES_FAILURE:
      return { ...state, loading: false, hasErrors: true };
    default:
      return state;
  }
};

export default sourcesReducer;
