import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    '&:hover': {
      textDecoration: 'none',
      borderBottom: '0',
    },
  },
}));

export const Logo = ({ style = '' }) => {
  const { link } = useStyles();

  return (
    <a href="url" className={`${link}`}>
      <img src="images/logo.svg" alt="" className={`${style}`} />
    </a>
  );
};
