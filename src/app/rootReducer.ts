import { combineReducers } from '@reduxjs/toolkit';
import { ImportsNotUsedAsValues } from 'typescript';
import posts from '../features/postlist/postlistSlice'
const rootReducer = combineReducers({
  posts
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;