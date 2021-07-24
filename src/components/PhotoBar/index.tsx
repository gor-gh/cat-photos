import { lazy, Suspense } from 'react';
import Loader from '../Loader';
const PhotoBar = lazy(() => import('./PhotoBar'));

const WrappedPhotoBar = () => {
  return (
    <Suspense fallback={Loader}>
      <PhotoBar />
    </Suspense>
  )
}

export default WrappedPhotoBar;
