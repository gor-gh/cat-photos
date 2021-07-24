import {lazy, Suspense} from 'react';
import {IImage} from './Image';
import Loader from '../Loader';

const WrappedImage = lazy(() => import('./Image'));

const ImageContainer = ({url, width, height}: IImage) => (
  <div>
    <Suspense fallback={Loader}>
      <WrappedImage url={url} width={width} height={height} />
    </Suspense>
  </div>
)

export default ImageContainer;
