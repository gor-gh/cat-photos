import { useEffect } from 'react';
import axios from 'axios';
import CategoriesList from '../CategoriesList';
import useMemoSelector from '../../hooks/useMemoSelector';
import { getCategories } from '../../store/selectors';
import { useDispatch } from 'react-redux';
import categorySlice from '../../store/category';
import useStyles from './styles';

const Header = () => {
  const {
    categories,
  } = useMemoSelector(state => ({
    categories: getCategories(state),
  }));

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://api.thecatapi.com/v1/categories')
      .then(res => {
        dispatch(categorySlice.actions.setCategories(res.data));
      })
  });

  return (
    <div className={classes.header}>
      <CategoriesList categories={categories} />
    </div>
  )
}

export default Header;
