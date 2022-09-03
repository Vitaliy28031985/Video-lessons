import { configureStore } from '@reduxjs/toolkit';
import { videosApi } from './videoSlice';
import {filter} from './reducers';

export const store = configureStore({
  reducer: {
    [videosApi.reducerPath]: videosApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    videosApi.middleware,
  ],
});