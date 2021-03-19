import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '949px',
    margin: '0 auto',
    padding: '24px',
  },
}));

export const Template = ({ children }) => {
  const { container } = useStyles();

  return <div className={container}>{children}</div>;
};
