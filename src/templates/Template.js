import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles() => ({
  container: {
  }
});

export const Template = () => {
  const { container } = useStyles();

  return (
    <div className={container}>
    </div>
  );
};
