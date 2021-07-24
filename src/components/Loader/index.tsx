import React from 'react';
import useStyles from './styles';

const Loader = () => {
  const classes = useStyles();

  return (
    <div className={classes.ldsRipple}>
      <div />
      <div />
    </div>
  )
};

export default Loader;
