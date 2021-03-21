import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette: { blueLight } }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    cursor: 'pointer',
    userSelect: 'none',
    border: `1px solid ${blueLight}`,
  },
}));

export const Filter = ({}) => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <img src="icons/filter.svg" />
    </div>
  );
};
