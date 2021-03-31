import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { secondary, blue } }) => ({
  container: {
    display: 'flex',
  },
  top: {
    transform: 'translate(0, 1px)',
    fill: ({ isOrdered, index, isUp, ids }) =>
      isOrdered === ids[index - 1] && isUp ? blue : secondary.main,
  },
  bottom: {
    transform: 'rotate(180deg) translate(8px, -6px)',
    fill: ({ isOrdered, index, isUp, ids }) =>
      isOrdered === ids[index - 1] && !isUp ? blue : secondary.main,
  },
}));

export const UpDown = ({ index = 0, isOrdered, orderHandler, isUp }) => {
  const { container, top, bottom } = useStyles({ isOrdered, index, isUp });
  const ids = ['niche', 'volume', 'growth', 'trend'];

  return (
    <div className={container} onClick={orderHandler} id={ids[index - 1]}>
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
    </div>
  );
};
