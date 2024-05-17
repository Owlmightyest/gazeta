import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ImageSlice } from '../ImageView/store/slice';
import { IReduxStore } from '../commonTypes';

const rootReducer = combineReducers<IReduxStore>({
  images: ImageSlice,
});
export const store = configureStore({
  reducer: rootReducer,
});
