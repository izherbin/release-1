/* eslint-disable max-len */
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  button: {
    '&:hover': {},
  },
  active: {},
  blank: {},
}));

export const Button = ({ text, action, isActive }) => {
  const { button, active, blank } = useStyles();

  return (
    <Fragment>
      <button type="button" className={`${button} ${isActive ? active : blank} `} onClick={action}>
        {text}
      </button>
    </Fragment>
  );
};
