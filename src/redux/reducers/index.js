import { ADD_TO_FAVOURITES, DELETE } from "../actions";

const initialState = {
  favourites: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload],
        },
      };
    case DELETE:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((_, index) => index !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
