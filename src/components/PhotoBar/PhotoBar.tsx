import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader';
import useStyles from './styles';
import ImageContainer from './ImageContainer';
import useMemoSelector from '../../hooks/useMemoSelector';
import { getPhotos } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import photoSlice from '../../store/photo';

const PhotoBar = () => {
  const {
    photos
  } = useMemoSelector(state => ({
    photos: getPhotos(state),
  }))
  const { categoryId } = useParams<{categoryId: string}>();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<number>(2);
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);

    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryId}`)
      .then(res => {
        dispatch(photoSlice.actions.setPhotos(res.data.map((el: any) => {
          const { url, width, height } = el;

          return {
            url,
            width,
            height,
          }
        })));
        setIsLoading(false);
      });

  }, [categoryId, dispatch]);

  const addNewPhotos = () => {
    setIsLoading(true);

    axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${nextPage}&category_ids=${categoryId}`)
      .then(res => {
        dispatch(photoSlice.actions.addPhotos(res.data.map((el: any) => {
          const { url, width, height } = el;

          return {
            url,
            width,
            height,
          }
        })));
        setIsLoading(false);
        setNextPage(prevState => prevState + 1);
      });
  }

  // @ts-ignore
  return (
    <div>
      <button
        className={classes.btn}
        onClick={addNewPhotos}>
        Load More
      </button>
      <div className={isLoading ? '' : classes.gridContainer}>
        { !isLoading && photos?.map((imgInfo, index) => {
          const width = 200;
          const height = (200 * imgInfo.height) / imgInfo.width;

          return (
            <ImageContainer
              key={index}
              url={imgInfo.url}
              width={width}
              height={height} />
          )
        }) }
      </div>
      { isLoading && <Loader />}
    </div>
  )
}

export default PhotoBar;
