import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  categoryItem: {
    paddingTop: '50px',
    paddingBottom: '50px',
    color: '#05386b',
    '&:hover': {
      opacity: 0.7,
      backgroundColor: '#379683',
    }
  },
  '@media screen and (max-width: 550px)': {
    categoryItem: {
      paddingTop: '15px',
      paddingBottom: '15px',
    }
  }
})

export default useStyles;
