import {
  TypedUseSelectorHook,
  useSelector as useSelectorGeneric,
} from 'react-redux';


import {IReduxState} from '../types';

export const useSelector: TypedUseSelectorHook<IReduxState> = useSelectorGeneric;
