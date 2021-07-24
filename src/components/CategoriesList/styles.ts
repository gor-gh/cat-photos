import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  categoryList: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    '& a': {
      textDecoration: 'none',
      width: '10%',
    }
  },
  '@media screen and (max-width: 550px)': {
    categoryList: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& a': {
        width: '100%',
      }
    },
  },
})

export default useStyles;

