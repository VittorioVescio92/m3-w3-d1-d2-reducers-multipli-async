import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/FavouritesReducer";
import companyReducer from "../reducers/CompanyReducer";
import jobsReducer from "../reducers/JobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
  company: companyReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
