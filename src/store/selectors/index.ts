import { ICategory, ICategoryState, IPhotosState, IPhotoState, IReduxState } from '../../types';

// Main
export const getState = (state: IReduxState): IReduxState => state;
export const getCategory = (state: IReduxState): ICategoryState => state.category;
export const getPhoto = (state: IReduxState): IPhotosState => state.photo;

// Category
export const getActiveCategoryId = (state: IReduxState): number => getCategory(state).activeCategoryId;
export const getCategories = (state: IReduxState): ICategory[] => getCategory(state).categories;

// Photo
export const getPhotos = (state: IReduxState): IPhotoState[] => getPhoto(state).photos;
