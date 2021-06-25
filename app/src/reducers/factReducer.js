import {
  FETCHING_START,
  FETCHING_SUCCESS,
  FETCHING_FAILURE,
} from "../actions/factsActions";
const initialState = {
  fact: [],
  error: "",
  loading: false,
};

export const factReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return { ...state, loading: true };
    case FETCHING_SUCCESS:
      return { ...state, loading: false, fact: action.payload };
    case FETCHING_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
