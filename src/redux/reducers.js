import { createReducer } from '@reduxjs/toolkit';
import {filterVideo} from './actions';


export const filter = createReducer('', {
  [filterVideo]: (_, { payload }) => payload,
});