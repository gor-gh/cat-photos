import { TypedUseSelectorHook } from 'react-redux';
import isEqual from 'react-fast-compare';

import { useSelector } from '../store/helpers';
import { IReduxState } from '../types';

const useMemoSelector: TypedUseSelectorHook<IReduxState> = (
  selector,
  comparator = isEqual,
) => useSelector(selector, comparator);

export default useMemoSelector;
