import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
  container: {
    [breakpoints.down('md')]: {
      fontSize: '0.8rem',
    },
    [breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  image: {
    marginRight: '8px',
    [breakpoints.down('md')]: {
      marginRight: '2px',
    },
    [breakpoints.down('sm')]: {
      marginRight: '8px',
    },
  },
}));

export const TableGrowth = ({ growth }) => {
  const { container, image } = useStyles();
  const checkGrowth = growth ? [<img src="icons/uptrend.svg" className={image} />, growth] : '-';

  return <div className={container}>{checkGrowth}</div>;
};
