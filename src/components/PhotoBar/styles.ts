import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  gridContainer: {
    width: '100%',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    gridRowGap: 20,
    alignItems: 'center',
  },
  btn: {
    margin: '20px 0',
    backgroundColor: '#5cdb95',
    color: '#05386b',
    border: 'none',
    borderRadius: 10,
    padding: 10,
    cursor: 'pointer',
  },
  '@media screen and (max-width: 1200px)': {
    gridContainer: {
      gridTemplateColumns: 'auto auto auto auto',
    }
  },
  '@media screen and (max-width: 960px)': {
    gridContainer: {
      gridTemplateColumns: 'auto auto auto',
    }
  },
  '@media screen and (max-width: 680px)': {
    gridContainer: {
      gridTemplateColumns: 'auto auto',
    }
  },
  '@media screen and (max-width: 440px)': {
    gridContainer: {
      gridTemplateColumns: 'auto',
    }
  },
})

export default useStyles;
