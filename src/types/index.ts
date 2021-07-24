export interface ICategory {
  id: number;
  name: string;
}

export interface ICategoryState {
  categories: ICategory[];
  activeCategoryId: number;
}

export interface IPhotosState {
  photos: IPhotoState[];
}

export interface IPhotoState {
  url: string;
  width: number;
  height: number;
}

export interface IReduxState {
  category: ICategoryState;
  photo: IPhotosState;
}
