import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useOrderToggle } from 'hooks/useOrderToggle';

const useStyles = makeStyles(({ palette: { secondary, blue } }) => ({
  container: {
    display: 'flex',
  },
  top: {
    transform: 'translate(0, -3px)',
    fill: ({ isOrdered }) => (isOrdered === 1 ? blue : secondary.main),
  },
  bottom: {
    transform: 'rotate(180deg) translate(8px, -3px)',
    fill: ({ isOrdered }) => (isOrdered === 2 ? blue : secondary.main),
  },
}));

export const UpDown = ({}) => {
  const { isOrdered, orderHandler } = useOrderToggle();
  const { container, top, bottom } = useStyles({ isOrdered });

  return (
    <div className={container} onClick={orderHandler}>
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
