import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  link: {
    height: '27px',
    '&:hover': {
      textDecoration: 'none',
      borderBottom: '0',
    },
  },
}));

export const Logo = ({ style = '' }) => {
  const { link } = useStyles();

  return (
    <a href="/" className={`${link}`}>
      <img src="images/logo.svg" alt="logo" className={`${style}`} />
    </a>
  );
};
