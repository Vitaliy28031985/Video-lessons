import { configureStore } from '@reduxjs/toolkit';
// import { contactsApi } from './contactsSlice';
import {filter} from './reducerss';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});