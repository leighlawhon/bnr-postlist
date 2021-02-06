import { combineReducers } from '@reduxjs/toolkit';
import { ImportsNotUsedAsValues } from 'typescript';
import postsResults from '../features/postlist/postlistSlice'
const rootReducer = combineReducers({
  postsResults
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;