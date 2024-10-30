import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer.js' // Update with the correct path to your userSlice

const appstore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appstore;
