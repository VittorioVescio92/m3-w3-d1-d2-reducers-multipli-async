import { ADD_TO_FAVOURITES, DELETE } from "../actions";

const initialState = {
  content: [],
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,

        content: [...state.content, action.payload],
      };
    case DELETE:
      return {
        ...state,

        content: state.content.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default favouritesReducer;
