import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategory, ICategoryState } from '../../types';

const initialState: ICategoryState = {
  categories: [],
  activeCategoryId: 0
}

const categorySlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setActiveCategoryId: (state, { payload }: PayloadAction<number>) => {
      state.activeCategoryId = payload;
    },
    setCategories: (state, { payload }: PayloadAction<ICategory[]>) => {
      state.categories = payload;
    }
  }
});

export default categorySlice;
