import { FETCH_RESULTS, RESET_RESULTS } from "../actions";

const initialState = {
  content: [],
};
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESULTS:
      return {
        ...state,
        content: action.payload,
      };
    case RESET_RESULTS:
      return initialState;
    default:
      return state;
  }
};

export default jobsReducer;
