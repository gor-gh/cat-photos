import { Dispatch } from 'react';

import { IReduxState } from '../types';

import store from './index';

export const { getState } = store;
export const { dispatch }: { dispatch: Dispatch<any> } = store;

export function getSelectors<T>(processor: (state: IReduxState) => T): T {
  return processor(getState());
}
