import { ICategory } from '../../types';

import CategoryItem from './CategoryItem';
import useStyles from './styles';

interface ICategoriesList {
  categories: ICategory[];
}

const CategoriesList = ({categories}: ICategoriesList) => {
  const classes = useStyles();

  return (
    <div className={classes.categoryList}>
      {
        categories.map(categ => (
          <CategoryItem
            key={categ.id}
            name={categ.name}
            id={categ.id}
          />
        ))
      }
    </div>
  )
};

export default CategoriesList;
