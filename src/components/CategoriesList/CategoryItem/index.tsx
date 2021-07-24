import { Link } from 'react-router-dom';
import {ICategory} from '../../../types';
import useStyles from './styles';

const CategoryItem = ({ name, id }: ICategory) => {
  const classes = useStyles();

  return (
    <Link to={`/categories/${id}`}>
      <div
        className={classes.categoryItem}
      >
        {name}
      </div>
    </Link>
  )
}

export default CategoryItem;
