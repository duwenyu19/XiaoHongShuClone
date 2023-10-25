import { configureStore } from '@reduxjs/toolkit';
import profileReducer, { initialState } from './reducers/profileReducer';
import { initializeUsersDataPostMe } from "./utilities/usersDataPostMe";

initializeUsersDataPostMe(initialState.username);

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  preloadedState: {
    profile: initialState
  },
});

export default store;
