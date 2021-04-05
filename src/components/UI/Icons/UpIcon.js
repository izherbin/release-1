import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { secondary, blue } }) => ({
  top: {
    transform: 'translate(0, 1px)',
    fill: ({ isOrdered, index, isUp, names }) =>
      isOrdered === names[index] && isUp ? blue : secondary.main,
    opacity: ({ dimmed }) => (dimmed ? '0.6' : '1'),
  },
  bottom: {
    transform: 'rotate(180deg) translate(8px, -6px)',
    fill: ({ isOrdered, index, isUp, names }) =>
      isOrdered === names[index] && !isUp ? blue : secondary.main,
    opacity: ({ dimmed }) => (dimmed ? '0.6' : '1'),
  },
}));

export const UpIcon = ({ isOrdered, index, isUp, dimmed, names }) => {
  const { top, bottom } = useStyles({ isOrdered, index, isUp, dimmed, names });

  return (
    <Fragment>
      <svg height="4" viewBox="0 0 8 4" width="8" className={top}>
        <path
          d="m3.53553391 2.03553391h5l-5 5z"
          fillRule="evenodd"
          transform="matrix(.70710678 .70710678 -.70710678 .70710678 2.974874 -3.93934)"
        />
      </svg>
      <svg height="4" viewBox="0 0 8 4" width="8" className={bottom}>
        <path
          d="m3.53553391 2.03553391h5l-5 5z"
          fillRule="evenodd"
          transform="matrix(.70710678 .70710678 -.70710678 .70710678 2.974874 -3.93934)"
        />
      </svg>
    </Fragment>
  );
};
