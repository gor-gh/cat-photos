import { combineReducers, configureStore } from '@reduxjs/toolkit';

import categorySlice from './category';
import photoSlice from './photo';

const reducer = combineReducers({
  category: categorySlice.reducer,
  photo: photoSlice.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
