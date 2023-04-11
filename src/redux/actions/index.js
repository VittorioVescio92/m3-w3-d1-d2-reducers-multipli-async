export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const DELETE = "DELETE";

export const addToFavouritesAction = data => ({ type: ADD_TO_FAVOURITES, payload: data });
export const removeFromFavouritesAction = index => ({ type: DELETE, payload: index });
