import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IPhotosState, IPhotoState } from '../../types';

const initialState: IPhotosState = {
  photos: [],
}

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    setPhotos: (state, { payload }: PayloadAction<IPhotoState[]>) => {
      state.photos = payload;
    },
    addPhotos: (state, { payload }: PayloadAction<IPhotoState[]>) => {
      state.photos = [...state.photos, ...payload];
    },
  }
});

export default photoSlice;
